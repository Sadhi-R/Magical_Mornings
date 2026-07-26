"use client";

import { motion } from "framer-motion";
import { Star, Users, Award, Calendar } from "lucide-react";
import { socialProof } from "@/data/content";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const icons = [Users, Star, Award, Calendar];

export function TrustBar() {
  return (
    <section className="trust-strip section-padding-sm" aria-label="Community trust metrics">
      <div className="section-container">
        <motion.div
          className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          {socialProof.stats.map((stat, i) => {
            const Icon = icons[i] ?? Star;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={defaultTransition}
                className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-4 lg:text-left"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 lg:mb-0">
                  <Icon className="h-5 w-5 text-accent-light" aria-hidden />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-0.5 text-sm text-white/65">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
