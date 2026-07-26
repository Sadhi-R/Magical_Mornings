import Link from "next/link";
import { site } from "@/data/content";

type CTAButtonProps = {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  size?: "default" | "large";
};

export function CTAButton({
  label,
  variant = "primary",
  className = "",
  size = "default",
}: CTAButtonProps) {
  const sizeClass = size === "large" ? "px-8 py-4 text-base" : "";
  const variantClass = variant === "primary" ? "btn-glow" : "btn-outline";

  return (
    <Link
      href={site.ctaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClass} ${sizeClass} ${className}`}
      aria-label={`${label} — opens registration page`}
    >
      {label}
    </Link>
  );
}
