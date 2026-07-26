"use client";

import { ContentImage } from "@/components/ui/ContentImage";
import {
  CalendarDays,
  CheckSquare,
  BookOpen,
  Headphones,
  ListChecks,
  PenLine,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { bonuses } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "calendar-days": CalendarDays,
  "check-square": CheckSquare,
  "book-open": BookOpen,
  headphones: Headphones,
  "list-checks": ListChecks,
  "pen-line": PenLine,
};

export function Bonuses() {
  return (
    <section id="bonuses" className="section-cream section-padding">
      <div className="section-container">
        <motion.div className="flex flex-col items-center gap-4 text-center">
          <SectionHeader title={bonuses.title} subtitle={bonuses.subtitle} />
          <span className="badge-pill border border-primary/20 bg-primary/10 font-semibold text-primary">
            <Gift className="h-4 w-4" aria-hidden />
            Included with registration
          </span>
        </motion.div>

        <motion.div
          className="mx-auto mt-8 max-w-md"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContentImage
            src={bonuses.image}
            alt="Six free bonuses included with registration"
            width={500}
            height={360}
            className="w-full rounded-2xl"
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {bonuses.items.map((bonus) => {
            const Icon = iconMap[bonus.icon] ?? Gift;
            return (
              <motion.div
                key={bonus.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="card-premium group relative overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150"
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white shadow-glow">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {bonus.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {bonus.description}
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
          <CTAButton label={bonuses.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
