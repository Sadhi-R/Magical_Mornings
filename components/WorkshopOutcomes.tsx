"use client";

import {
  HeartPulse,
  ChartNoAxesColumn,
  Sparkles,
  AlarmClock,
  ShieldCheck,
  Lightbulb,
  Wallet,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { outcomes } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "heart-pulse": HeartPulse,
  "chart-no-axes-column": ChartNoAxesColumn,
  sparkles: Sparkles,
  "alarm-clock": AlarmClock,
  "shield-check": ShieldCheck,
  lightbulb: Lightbulb,
  wallet: Wallet,
  "users-round": UsersRound,
};

export function WorkshopOutcomes() {
  return (
    <section id="outcomes" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader
          title={outcomes.title}
          subtitle={outcomes.subtitle}
          dark
        />

        <motion.div
          className="mt-12 grid gap-4 grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {outcomes.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {item.title}
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
          <CTAButton label="Reserve Your Seat" size="large" />
        </motion.div>
      </div>
    </section>
  );
}
