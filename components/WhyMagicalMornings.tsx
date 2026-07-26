"use client";

import { motion } from "framer-motion";
import { whyMagicalMornings } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function WhyMagicalMornings() {
  return (
    <section id="why" className="bg-dark section-padding">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            title={whyMagicalMornings.title}
            subtitle={whyMagicalMornings.subtitle}
            description={whyMagicalMornings.description}
            align="left"
            dark
          />

          <motion.div
            className="grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {whyMagicalMornings.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                transition={{ ...defaultTransition, delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <h3 className="font-display text-sm font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label="Start Your Magical Morning" size="large" />
        </motion.div>
      </div>
    </section>
  );
}
