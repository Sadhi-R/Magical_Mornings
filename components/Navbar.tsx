"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-dark/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="section-container flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <Link href="#" className="flex items-center gap-3" aria-label="Magical Mornings home">
          <Image
            src="/images/Logo.png"
            alt="The Law of Leadership logo"
            width={40}
            height={40}
            className="rounded-lg"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold text-white leading-tight">
              Magical Mornings
            </p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/60">
              {site.brandName}
            </p>
          </div>
        </Link>

        <CTAButton label="Join Now" className="!px-5 !py-2.5 !text-xs sm:!text-sm" />
      </nav>
    </header>
  );
}
