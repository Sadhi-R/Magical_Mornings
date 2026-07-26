"use client";

import { motion, type Variants } from "framer-motion";
import { defaultTransition, fadeUp } from "@/lib/motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  eyebrow?: string;
};

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  dark = false,
  className = "",
  eyebrow,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-ink";
  const mutedColor = dark ? "text-white/60" : "text-muted";

  return (
    <motion.header
      className={`max-w-4xl ${alignClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp as Variants}
      transition={defaultTransition}
    >
      {(eyebrow || subtitle) && (
        <div className={`mb-4 ${align === "center" ? "text-center" : ""}`}>
          {eyebrow && (
            <p
              className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
                dark ? "text-accent" : "text-primary"
              } ${align === "center" ? "justify-center w-full" : ""}`}
            >
              <span className={`h-px w-8 ${dark ? "bg-accent/50" : "bg-primary/40"}`} aria-hidden />
              {eyebrow}
              {align === "center" && (
                <span className={`h-px w-8 ${dark ? "bg-accent/50" : "bg-primary/40"}`} aria-hidden />
              )}
            </p>
          )}
          {subtitle && (
            <p className={`mt-3 text-body-lg ${mutedColor} ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      <h2 className={`text-section-title ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-body-lg ${mutedColor} ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.header>
  );
}
