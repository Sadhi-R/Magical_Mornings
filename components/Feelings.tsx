"use client";

import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { feelings } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Feelings() {
  return (
    <section id="feelings" className="section-cream section-padding">
      <div className="section-container">
        <SectionHeader title={feelings.title} eyebrow="Sound Familiar?" />

        <motion.ul
          className="mt-12 grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          aria-label="Workshop audience feelings"
        >
          {feelings.items.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover"
            >
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
