"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { site } from "@/data/content";

type CTAButtonProps = {
  label: string;
  variant?: "primary" | "outline" | "outline-dark";
  className?: string;
  size?: "default" | "large" | "xl";
  showArrow?: boolean;
  showSecure?: boolean;
  /** Micro-copy rendered directly under the button to reduce hesitation. */
  subLabel?: string;
  /** Background the button sits on, so supporting text stays readable. */
  tone?: "dark" | "light";
  fullWidth?: boolean;
  pulse?: boolean;
  href?: string;
  external?: boolean;
};

export function CTAButton({
  label,
  variant = "primary",
  className = "",
  size = "default",
  showArrow = true,
  showSecure = false,
  subLabel,
  tone = "dark",
  fullWidth = false,
  pulse = false,
  href = site.ctaUrl,
  external = true,
}: CTAButtonProps) {
  const sizeClass =
    size === "xl"
      ? "px-10 py-5 text-lg rounded-2xl"
      : size === "large"
        ? "px-9 py-4.5 text-base"
        : "px-7 py-3.5 text-sm";

  const variantClass =
    variant === "primary"
      ? "btn-glow"
      : variant === "outline-dark"
        ? "btn-outline-dark"
        : "btn-outline";

  const linkProps = external
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  const isPrimary = variant === "primary";
  const supportTextClass = tone === "light" ? "text-ink/55" : "text-white/50";

  return (
    <motion.div
      className={`inline-flex flex-col items-center gap-2 ${fullWidth ? "w-full" : ""} ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        {...linkProps}
        className={`group ${variantClass} ${sizeClass} ${fullWidth ? "w-full" : ""} ${
          pulse && isPrimary ? "animate-cta-pulse" : ""
        }`}
        aria-label={external ? `${label} — secure registration` : label}
      >
        <span>{label}</span>
        {showArrow && (
          <ArrowRight
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        )}
      </Link>

      {subLabel && (
        <p className={`text-center text-xs font-medium ${supportTextClass}`}>{subLabel}</p>
      )}

      {showSecure && (
        <p className={`flex items-center gap-1.5 text-xs ${supportTextClass}`}>
          <Lock className="h-3 w-3" aria-hidden />
          Secure payment via Razorpay
        </p>
      )}
    </motion.div>
  );
}
