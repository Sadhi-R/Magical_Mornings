"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { mentors, mentorsSection } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Mentors() {
  return (
    <section id="mentors" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader
          title={mentorsSection.title}
          subtitle={mentorsSection.subtitle}
          dark
        />

        <motion.div
          className="mt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {mentors.map((mentor) => (
            <motion.article
              key={mentor.name}
              variants={fadeUp}
              transition={defaultTransition}
              className="overflow-hidden rounded-2xl border border-white/10 bg-dark-elevated"
            >
              <div className="grid lg:grid-cols-[240px_1fr]">
                <div className="relative aspect-square lg:aspect-auto lg:min-h-[280px]">
                  <Image
                    src={mentor.image}
                    alt={`${mentor.name} — ${mentor.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 240px"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-medium text-primary-light">
                    {mentor.greeting}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">
                    {mentor.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-white/70">
                    {mentor.role}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{mentor.credentials}</p>
                  <p className="mt-5 text-sm leading-relaxed text-white/75">
                    {mentor.bioTelugu}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {mentor.bioEnglish}
                  </p>
                  <ul className="mt-5 space-y-2" aria-label={`${mentor.name} achievements`}>
                    {mentor.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-xs text-white/55"
                      >
                        <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-light" aria-hidden />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
