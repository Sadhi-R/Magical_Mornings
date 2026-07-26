"use client";

import { motion } from "framer-motion";
import { framework } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { ContentImage } from "@/components/ui/ContentImage";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Framework() {
  return (
    <section id="framework" className="section-cream relative section-padding">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[5%] top-[20%] h-40 w-40 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] bottom-[15%] h-48 w-48 rounded-full bg-accent/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <div className="section-container relative">
        <SectionHeader title={framework.title} subtitle={framework.subtitle} />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {framework.steps.map((step) => (
            <motion.article
              key={step.step}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
            >
              <div className={`${step.headerColor} px-4 py-3 text-center`}>
                <p className="text-xs font-bold uppercase tracking-widest text-white/85">
                  Step {step.step}
                </p>
                <h3 className="mt-1 text-base font-bold text-white">{step.title}</h3>
              </div>
              <div className="relative aspect-[4/3] bg-slate-100">
                <ContentImage
                  src={step.image}
                  alt={`${step.title} — Magical Morning framework step ${step.step}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <motion.div
                className="flex flex-1 flex-col p-4"
                whileHover={{ backgroundColor: "rgba(236, 28, 99, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-medium leading-relaxed text-ink-soft">{step.teluguIntro}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.teluguBody}</p>
              </motion.div>
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
          <CTAButton label={framework.cta} size="large" />
        </motion.div>
      </div>
    </section>
  );
}
