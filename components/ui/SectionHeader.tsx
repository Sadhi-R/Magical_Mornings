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
};

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleColor = dark ? "text-white" : "text-dark";
  const mutedColor = dark ? "text-white/70" : "text-dark/60";

  return (
    <motion.div
      className={`max-w-3xl ${alignClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp as Variants}
      transition={defaultTransition}
    >
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? "text-primary-light" : "text-primary"}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${mutedColor}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
