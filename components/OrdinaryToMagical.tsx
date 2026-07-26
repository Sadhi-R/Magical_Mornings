"use client";

import { ContentImage } from "@/components/ui/ContentImage";
import { motion } from "framer-motion";
import { ordinaryToMagical } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function OrdinaryToMagical() {
  return (
    <section id="ordinary" className="section-mesh-light section-padding">
      <div className="section-container">
        <SectionHeader title={ordinaryToMagical.title} />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContentImage
              src={ordinaryToMagical.image}
              alt="A stressed phone-first morning transforming into a calm sunrise morning"
              width={1024}
              height={640}
              className="w-full rounded-[var(--radius-xl)] border border-slate-200/80 shadow-premium"
            />
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {ordinaryToMagical.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                transition={defaultTransition}
                className={`text-base leading-relaxed ${
                  i === 0 || i >= 3 ? "font-medium text-ink" : "text-ink/65"
                }`}
              >
                {para}
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
          <CTAButton label={ordinaryToMagical.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
