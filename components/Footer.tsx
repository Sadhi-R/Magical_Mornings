import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { site, footer } from "@/data/content";
import { ContentImage } from "@/components/ui/ContentImage";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-mesh-dark border-t border-white/8 pb-12 pt-12">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="#" className="flex items-center gap-3" aria-label="Magical Mornings home">
              <ContentImage
                src="/images/Logo.png"
                alt="10x Wealth Creators logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg object-contain"
              />
              <div>
                <p className="text-sm font-bold text-white">Magical Mornings</p>
                <p className="text-xs text-white/45">{site.organization}</p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/50">{site.badge}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent/40 hover:text-accent-light"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent/40 hover:text-accent-light"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent/40 hover:text-accent-light"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/45">
              <a href={`mailto:${site.email}`} className="hover:text-accent-light">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/35">
          <p>
            &copy; {year} {site.organization}. All rights reserved. Educational coaching — not
            financial, legal, or medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
