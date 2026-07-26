"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Users } from "lucide-react";
import { offer, socialProof } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";

const SHOW_AFTER_PX = 520;

export function StickyCTA() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [finalCtaVisible, setFinalCtaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The bar is redundant once the visitor reaches the closing CTA section.
  useEffect(() => {
    const target = document.getElementById("join");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFinalCtaVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastHero && !finalCtaVisible;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/97 shadow-2xl backdrop-blur-xl"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          role="region"
          aria-label="Quick registration"
        >
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
            <div className="hidden flex-1 sm:block">
              <p className="flex items-center gap-2 text-sm font-bold text-white">
                <Flame className="h-4 w-4 text-accent" aria-hidden />
                {offer.headline}
              </p>
              <p className="mt-0.5 flex items-center gap-2 text-xs text-white/65">
                <Users className="h-3.5 w-3.5 text-accent-light" aria-hidden />
                Only {offer.seatsLeft} of {offer.totalSeats} seats left · Secure Razorpay checkout
              </p>
            </div>

            <div className="flex-1 sm:hidden">
              <p className="text-[11px] font-bold uppercase tracking-wider text-accent-light">
                {socialProof.urgency}
              </p>
              <p className="text-[11px] font-semibold text-accent-light">
                Only {offer.seatsLeft} seats left
              </p>
            </div>

            <CTAButton
              label="Reserve My Seat"
              size="default"
              pulse
              className="shrink-0"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
