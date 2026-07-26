"use client";

import { Brain, Activity, Compass, Zap, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { framework } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  activity: Activity,
  compass: Compass,
  zap: Zap,
};

export function Framework() {
  return (
    <section id="framework" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader
          title={framework.title}
          subtitle={framework.subtitle}
          dark
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {framework.steps.map((step) => {
            const Icon = iconMap[step.icon] ?? Brain;
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={defaultTransition}
                className={`card-dark border-t-4 ${step.color} flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary-light">
                    STEP {step.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.teluguIntro}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.teluguBody}
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
          <CTAButton label={framework.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
