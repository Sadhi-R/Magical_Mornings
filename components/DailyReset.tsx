"use client";

import { motion } from "framer-motion";
import { dailyReset } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function DailyReset() {
  return (
    <section id="daily-reset" className="bg-white section-padding">
      <div className="section-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <h2 className="font-display text-2xl font-bold text-dark sm:text-3xl lg:text-4xl text-balance">
            {dailyReset.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-dark/70">
            {dailyReset.intro}
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {dailyReset.pillars.map((pillar) => (
            <motion.div
              key={pillar.telugu}
              variants={fadeUp}
              transition={defaultTransition}
              className="card-premium text-center"
            >
              <p className="font-display text-xl font-bold gradient-text">
                {pillar.telugu}
              </p>
              <p className="mt-2 text-sm text-dark/60">{pillar.english}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-dark/70"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          {dailyReset.closing}
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label={dailyReset.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
