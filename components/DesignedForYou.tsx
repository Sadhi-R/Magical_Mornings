"use client";

import { motion } from "framer-motion";
import { designedForYou } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function DesignedForYou() {
  return (
    <section id="designed" className="bg-white section-padding">
      <div className="section-container">
        <SectionHeader title={designedForYou.title} />

        <motion.div
          className="mx-auto mt-10 max-w-3xl space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {designedForYou.points.map((point, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              transition={defaultTransition}
              className="text-base leading-relaxed text-dark/75"
            >
              {point}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label={designedForYou.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
