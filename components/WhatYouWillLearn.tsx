"use client";

import { Check } from "lucide-react";
import { ContentImage } from "@/components/ui/ContentImage";
import { motion } from "framer-motion";
import { learning } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function WhatYouWillLearn() {
  return (
    <section id="learn" className="section-mesh-light section-padding">
      <motion.div className="section-container">
        <SectionHeader title={learning.title} subtitle="పూర్తిగా తెలుగులో నిర్వహించబడే live workshop" />

        <motion.div
          className="mx-auto mt-10 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContentImage
            src={learning.image}
            alt="Morning affirmations and journaling ritual for wealth and abundance"
            width={1024}
            height={683}
            className="w-full rounded-[var(--radius-xl)] border border-slate-200/80 shadow-premium"
          />
        </motion.div>

        <motion.ul
          className="mt-12 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          aria-label="Workshop curriculum"
        >
          {learning.items.map((item, index) => (
            <motion.li
              key={`learn-${index}`}
              variants={fadeUp}
              transition={defaultTransition}
              className="rounded-2xl border border-ink/5 bg-white p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <p className="text-base leading-relaxed text-ink/80">{item.telugu}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label={learning.cta} size="large" />
        </motion.div>
      </motion.div>
    </section>
  );
}
