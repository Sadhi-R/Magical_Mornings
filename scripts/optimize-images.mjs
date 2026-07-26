import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const MAX_WIDTH = 1280;

// Photographs compress far better as JPEG. Graphics with text or flat colour
// stay as PNG so their edges do not pick up compression artefacts.
const PHOTO_QUALITY = 78;
const GRAPHIC_QUALITY = 82;

const PHOTO_PATTERNS = [/^framework[\\/]/, /^mentors[\\/]/, /^testimonials[\\/]/];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (bytes) => Math.round(bytes / 1024);
const isPhoto = (rel) => PHOTO_PATTERNS.some((re) => re.test(rel));

let saved = 0;

for await (const file of walk(IMAGES_DIR)) {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const rel = path.relative(IMAGES_DIR, file);
  const before = (await stat(file)).size;
  const { width } = await sharp(file).metadata();
  const resize = { width: Math.min(width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true };

  // Photos always end up as .jpg; graphics keep their original container.
  const toJpeg = isPhoto(rel) || ext !== ".png";
  const target = toJpeg ? file.replace(/\.(png|jpe?g)$/i, ".jpg") : file;
  const tmp = `${target}.tmp`;

  const pipeline = sharp(file).resize(resize);
  await (toJpeg
    ? pipeline.jpeg({ quality: PHOTO_QUALITY, mozjpeg: true })
    : pipeline.png({ quality: GRAPHIC_QUALITY, compressionLevel: 9, palette: true })
  ).toFile(tmp);

  const after = (await stat(tmp)).size;
  const worthIt = after < before || target !== file;

  if (!worthIt) {
    await unlink(tmp);
    continue;
  }

  try {
    await unlink(file);
  } catch (err) {
    if (err.code !== "EBUSY" && err.code !== "EPERM") throw err;
    await unlink(tmp);
    console.log(`${rel}  SKIPPED (file locked)`);
    continue;
  }

  await rename(tmp, target);
  saved += before - after;
  const renamed = target !== file ? ` -> ${path.basename(target)}` : "";
  console.log(`${rel}  ${kb(before)}KB -> ${kb(after)}KB${renamed}`);
}

console.log(`\nTotal saved: ${kb(saved)}KB`);
