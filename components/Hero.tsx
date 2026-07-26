"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Star } from "lucide-react";
import { hero, site } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark pt-24 pb-16 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.25)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary-light/15 blur-3xl"
      />

      <div className="section-container relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 section-padding">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.span
            variants={fadeUp}
            transition={defaultTransition}
            className="badge-pill border border-primary/30 bg-primary/10 text-primary-light"
          >
            {site.badge}
          </motion.span>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/50"
          >
            {site.brandName}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-[2rem] text-balance"
          >
            {hero.teluguHeadline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {hero.englishSubheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 flex flex-wrap gap-2"
          >
            {hero.pillars.map((pillar) => (
              <span
                key={pillar.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90"
              >
                <span>{pillar.emoji}</span>
                <span className="font-medium">{pillar.label}</span>
                <span className="text-white/50">({pillar.subtitle})</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <p className="font-display text-lg font-bold text-white">
              {hero.workshopLabel}
            </p>
            <p className="mt-1 text-sm text-primary-light">{hero.workshopLanguage}</p>
            <p className="mt-3 text-sm text-white/60">{hero.workshopNote}</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-white/40 line-through">
                {site.currency}{site.originalPrice}
              </span>
              <span className="font-display text-3xl font-bold gradient-text">
                {site.currency}{site.price}
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-success">
              {hero.bonusNote}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-5 space-y-1 text-sm text-white/55"
          >
            {hero.noList.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p className="text-white/75">{hero.yesList}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-8 flex flex-wrap gap-4"
          >
            <CTAButton label={hero.primaryCta} size="large" />
            <CTAButton
              label={hero.secondaryCta}
              variant="outline"
              className="!border-white/20 !text-white hover:!bg-white/10"
            />
          </motion.div>

          <motion.ul
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-8 grid gap-2 sm:grid-cols-2"
            aria-label="Trust indicators"
          >
            {hero.trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          >
            <div className="flex gap-0.5" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-white/70">
              Trusted by 1,000+ community members across Telangana & AP
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-glow backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/mentors/sampath-kumar.jpg"
                alt="Sampath Kumar — Growth Mindset Mentor"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 overflow-hidden rounded-2xl border-4 border-dark shadow-xl">
              <Image
                src="/images/mentors/ram-prasad.jpg"
                alt="Ram Prasad — Business Mentor"
                width={112}
                height={112}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-dark-elevated/90 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary-light" aria-hidden />
                <div>
                  <p className="text-xs font-semibold text-white">Live Workshop</p>
                  <p className="text-[10px] text-white/50">2 Hours · Telugu + English</p>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            Guided by Sampath Kumar & Ram Prasad — The Law of Leadership
          </p>
        </motion.div>
      </div>
    </section>
  );
}
