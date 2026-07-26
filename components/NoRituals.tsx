"use client";

import { motion } from "framer-motion";
import { noRituals } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { ContentImage } from "@/components/ui/ContentImage";
import { defaultTransition, fadeUp } from "@/lib/motion";

export function NoRituals() {
  return (
    <section id="no-rituals" className="section-mesh-light section-padding">
      <div className="section-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            {noRituals.title}
          </h2>
          <p className="mt-6 text-lg font-medium text-ink/80">
            {noRituals.subtitle}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            {noRituals.body}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 max-w-4xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <ContentImage
            src={noRituals.image}
            alt="Your best life begins every morning — Magical Mornings"
            width={1024}
            height={768}
            className="w-full rounded-[var(--radius-xl)] border border-slate-200/80 shadow-premium"
          />
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label={noRituals.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
