"use client";

import { motion } from "framer-motion";
import { designedForYou } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { ContentImage } from "@/components/ui/ContentImage";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function DesignedForYou() {
  return (
    <section id="designed" className="section-mesh-light section-padding">
      <div className="section-container">
        <SectionHeader title={designedForYou.title} />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContentImage
              src={designedForYou.image}
              alt="Woman meditating peacefully beside a sunlit window at sunrise"
              width={1024}
              height={640}
              className="w-full rounded-[var(--radius-xl)] border border-slate-200/80 shadow-premium"
            />
          </motion.div>

          <motion.div
            className="space-y-5"
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
                className="text-base leading-relaxed text-ink/75"
              >
                {point}
              </motion.p>
            ))}
          </motion.div>
        </div>

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
