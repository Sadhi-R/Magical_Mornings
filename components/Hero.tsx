"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Star, Users } from "lucide-react";
import { hero, offer, site, socialProof } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { ContentImage } from "@/components/ui/ContentImage";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const AVATARS = [
  "/images/testimonials/sadhi.jpg",
  "/images/testimonials/rajitha.jpg",
  "/images/person.png",
];

export function Hero() {
  return (
    <section className="section-mesh-light relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 -top-24 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[130px]"
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[130px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-info/15 blur-[120px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col">
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="badge-pill border border-accent/40 bg-accent-soft text-[#B45309]">
              {site.badge}
            </span>
            <span className="badge-urgency">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {socialProof.urgency}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={defaultTransition}
            className="text-hero mt-7 text-navy"
          >
            {hero.headlineLead}{" "}
            <span className="gradient-text">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-hero-sub mt-6 max-w-xl text-ink-soft"
          >
            {hero.subheadline} {hero.closingLine}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <CTAButton
              label={hero.primaryCta}
              size="xl"
              pulse
              tone="light"
              subLabel={`Only ${offer.seatsLeft} of ${offer.totalSeats} seats left · Instant confirmation`}
              showSecure
            />
            <CTAButton
              label={hero.secondaryCta}
              variant="outline"
              size="large"
              showArrow={false}
              href="#benefits"
              external={false}
              tone="light"
            />
          </motion.div>

          <motion.ul
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-10 grid gap-3 sm:grid-cols-2"
            aria-label="Workshop highlights"
          >
            {hero.trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden>
                {AVATARS.map((src) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-primary-soft shadow-xs"
                  >
                    <ContentImage src={src} alt="" width={36} height={36} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <p className="text-xs font-medium text-muted">
                  {socialProof.rating} {socialProof.reviewLabel}
                </p>
              </div>
            </div>

            <p className="flex items-center gap-2 text-sm font-medium text-muted">
              <Users className="h-4 w-4 text-primary" aria-hidden />
              1,000+ transformed mornings
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-primary/25 to-info/25 blur-3xl"
          />

          <div className="image-premium relative animate-float-soft">
            <ContentImage
              src={hero.heroImage}
              alt={hero.heroImageAlt}
              width={1024}
              height={1536}
              priority
              className="w-full"
            />
          </div>

          <div className="relative mt-5 grid grid-cols-2 gap-3">
            <div className="card-glass flex items-center gap-2.5 px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-success-soft">
                <CheckCircle2 className="h-5 w-5 text-success" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-navy">Live Workshop</p>
                <p className="truncate text-[11px] font-medium text-muted">
                  {hero.workshopLanguage}
                </p>
              </div>
            </div>

            <div className="card-glass flex items-center gap-2.5 px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-info-soft">
                <MapPin className="h-5 w-5 text-info" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-navy">Grand Launch</p>
                <p className="truncate text-[11px] font-medium text-muted">Telangana &amp; AP</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
