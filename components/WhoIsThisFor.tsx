"use client";

import {
  Building2,
  Store,
  GraduationCap,
  Home,
  Baby,
  Search,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { audience } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "building-2": Building2,
  store: Store,
  "graduation-cap": GraduationCap,
  home: Home,
  baby: Baby,
  search: Search,
};

export function WhoIsThisFor() {
  return (
    <section id="audience" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader
          title={audience.title}
          subtitle={audience.subtitle}
          dark
        />

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {audience.groups.map((group) => {
            const Icon = iconMap[group.icon] ?? Building2;
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                transition={defaultTransition}
                className="card-dark group hover:bg-dark-elevated/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary-light">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {group.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
