"use client";

import {
  RefreshCw,
  Sunrise,
  Compass,
  Award,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { workshopExperience } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "refresh-cw": RefreshCw,
  sunrise: Sunrise,
  compass: Compass,
  award: Award,
};

export function WorkshopExperience() {
  return (
    <section id="experience" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader title={workshopExperience.title} dark />

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {workshopExperience.items.map((item) => {
            const Icon = iconMap[item.icon] ?? RefreshCw;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
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
          <CTAButton label={workshopExperience.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
