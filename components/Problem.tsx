"use client";

import {
  BatteryLow,
  Brain,
  Cloud,
  Target,
  HeartPulse,
  Users,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { problems } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "battery-low": BatteryLow,
  brain: Brain,
  cloud: Cloud,
  target: Target,
  "heart-pulse": HeartPulse,
  users: Users,
  briefcase: Briefcase,
};

export function Problem() {
  return (
    <section id="problem" className="bg-white section-padding">
      <div className="section-container">
        <SectionHeader title={problems.title} subtitle={problems.subtitle} />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {problems.items.map((item) => {
            const Icon = iconMap[item.icon] ?? Brain;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="card-premium group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
