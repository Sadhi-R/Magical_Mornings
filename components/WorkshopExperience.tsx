"use client";

import { ContentImage } from "@/components/ui/ContentImage";
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
    <section id="experience" className="section-tint-blue section-padding">
      <div className="section-container">
        <SectionHeader title={workshopExperience.title} />

        <motion.div
          className="mx-auto mt-10 max-w-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContentImage
            src={workshopExperience.image}
            alt="Live Magical Mornings workshop experience"
            width={600}
            height={360}
            className="w-full rounded-[var(--radius-xl)] border border-white shadow-premium"
          />
        </motion.div>

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
                className="flex gap-4 rounded-2xl border border-white bg-white/80 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
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
