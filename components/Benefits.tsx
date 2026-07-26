"use client";

import {
  Sparkles,
  Zap,
  Target,
  Brain,
  Wallet,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { joinTo } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  zap: Zap,
  target: Target,
  brain: Brain,
  wallet: Wallet,
  "heart-handshake": HeartHandshake,
};

export function Benefits() {
  return (
    <section id="benefits" className="section-tint-blue section-padding">
      <div className="section-container">
        <SectionHeader title={joinTo.title} />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {joinTo.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={defaultTransition}
              className="card-premium group"
              >
                <motion.div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </motion.div>
                <h3 className="mt-4 font-display text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.telugu}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label={joinTo.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
