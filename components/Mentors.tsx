"use client";

import { ContentImage } from "@/components/ui/ContentImage";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { mentors, mentorsSection } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Mentors() {
  return (
    <section id="mentors" className="section-mesh-dark section-padding">
      <div className="section-container">
        <SectionHeader
          title={mentorsSection.title}
          subtitle={mentorsSection.subtitle}
          dark
        />

        <motion.div
          className="mt-12 grid gap-8 lg:grid-cols-2"
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
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                <ContentImage
                  src={mentor.image}
                  alt={`${mentor.name} — ${mentor.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-sm font-medium text-accent-light">{mentor.greeting}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{mentor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-white/80">{mentor.role}</p>
                  <p className="text-xs text-white/50">{mentor.credentials}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-white/75">{mentor.bioTelugu}</p>
                <ul className="mt-5 space-y-2" aria-label={`${mentor.name} achievements`}>
                  {mentor.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-xs text-white/55"
                    >
                      <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <CTAButton label="Join With Our Mentors" size="large" />
        </motion.div>
      </div>
    </section>
  );
}
