"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { learning } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function WhatYouWillLearn() {
  return (
    <section id="learn" className="bg-white section-padding">
      <div className="section-container">
        <SectionHeader title={learning.title} />

        <motion.ul
          className="mt-12 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          aria-label="Workshop curriculum"
        >
          {learning.items.map((item) => (
            <motion.li
              key={item.english}
              variants={fadeUp}
              transition={defaultTransition}
              className="rounded-2xl border border-dark/5 bg-white p-5 shadow-card"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-dark">{item.english}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-dark/60">
                    {item.telugu}
                  </p>
                </div>
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
      </div>
    </section>
  );
}
