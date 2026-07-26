"use client";

import { motion } from "framer-motion";
import { noRituals } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp } from "@/lib/motion";

export function NoRituals() {
  return (
    <section id="no-rituals" className="bg-white section-padding">
      <div className="section-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <h2 className="font-display text-2xl font-bold text-dark sm:text-3xl lg:text-4xl">
            {noRituals.title}
          </h2>
          <p className="mt-6 text-lg font-medium text-dark/80">
            {noRituals.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-dark/65">
            {noRituals.body}
          </p>
          <div className="mt-10">
            <CTAButton label={noRituals.cta} size="large" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
