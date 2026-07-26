"use client";

import { ContentImage } from "@/components/ui/ContentImage";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { socialProof, testimonials } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-off-white section-padding">
      <div className="section-container">
        <SectionHeader
          title={testimonials.title}
          subtitle="Real people. Real mornings. Real transformation."
          eyebrow="Social Proof"
        />

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          {socialProof.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={defaultTransition}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-card"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {testimonials.items.map((story) => (
            <motion.blockquote
              key={story.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="group flex flex-col rounded-[var(--radius-card)] border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/30" aria-hidden />
                <div className="flex gap-0.5" aria-label={`${socialProof.rating} star rating`}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
              </div>
              <p className="mt-5 flex-1 text-base leading-relaxed text-ink/75">
                &ldquo;{story.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-sm">
                  <ContentImage
                    src={story.image}
                    alt={story.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-ink">{story.name}</cite>
                  <p className="text-xs text-muted">{story.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
