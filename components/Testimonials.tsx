"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark section-padding">
      <div className="section-container">
        <SectionHeader title={testimonials.title} dark />

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
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-primary-light/60" aria-hidden />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                &ldquo;{story.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/30">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">
                    {story.name}
                  </cite>
                  <p className="text-xs text-white/45">{story.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
