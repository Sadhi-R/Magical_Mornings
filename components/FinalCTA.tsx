"use client";

import { motion } from "framer-motion";
import { finalCta } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section id="join" className="relative overflow-hidden bg-dark py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/30 via-dark to-primary-light/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="section-container relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            {finalCta.subtitle}
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton label={finalCta.cta} size="large" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
