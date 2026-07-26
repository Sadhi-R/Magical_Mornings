"use client";

import { motion } from "framer-motion";
import { pricing, site } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, scaleIn } from "@/lib/motion";

export function Pricing() {
  return (
    <section id="pricing" className="bg-white section-padding">
      <div className="section-container">
        <SectionHeader title={pricing.title} subtitle={pricing.subtitle} />

        <motion.div
          className="mx-auto mt-12 max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
          transition={defaultTransition}
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 shadow-glow sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/10"
            />

            <div className="relative text-center">
              <p className="text-sm font-medium text-dark/50 line-through">
                {site.currency}{pricing.originalPrice}
              </p>
              <p className="mt-2 font-display text-6xl font-bold gradient-text sm:text-7xl">
                {site.currency}{pricing.price}
              </p>
              <p className="mt-2 text-sm text-dark/55">
                One-time · Live workshop + all bonuses
              </p>
            </div>

            <ul className="relative mt-8 space-y-3" aria-label="What's included">
              {pricing.includes.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-dark/75">
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-10 flex justify-center">
              <CTAButton label={pricing.cta} size="large" className="w-full sm:w-auto" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
