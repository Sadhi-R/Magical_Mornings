"use client";

import { CheckCircle2, Gift, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { whyJoin } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTAButton } from "@/components/ui/CTAButton";
import { OfferCountdown } from "@/components/ui/OfferCountdown";
import { defaultTransition, fadeUp, scaleIn } from "@/lib/motion";

export function WhyJoin() {
  return (
    <section id="why-join" className="section-mesh-light section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[30%] h-24 w-24 rounded-full bg-primary/10 blur-2xl"
      />
      <div className="section-container relative">
        <SectionHeader
          title={whyJoin.title}
          subtitle={whyJoin.subtitle}
          eyebrow="Your Complete Package"
        />

        <motion.div
          className="mx-auto mt-12 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
          transition={defaultTransition}
        >
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-primary/15 bg-white p-8 shadow-premium sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"
            />

            <div className="relative mb-8">
              <OfferCountdown variant="card" />
            </div>

            <div className="relative mb-8 flex flex-wrap gap-3">
              {whyJoin.bonuses.map((bonus) => (
                <span
                  key={bonus}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-xs font-bold text-amber-800"
                >
                  <Gift className="h-3.5 w-3.5" aria-hidden />
                  {bonus}
                </span>
              ))}
            </div>

            <ul className="relative space-y-4" aria-label="What's included">
              {whyJoin.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
                  <span>{item.replace(/^✅\s*/, "")}</span>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex items-center gap-3 rounded-2xl border border-success/20 bg-success/5 p-4">
              <Shield className="h-5 w-5 shrink-0 text-success" aria-hidden />
              <p className="text-sm font-medium text-ink/70">{whyJoin.guarantee}</p>
            </div>

            <motion.div
              className="relative mt-10 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <CTAButton
                label={whyJoin.cta}
                size="xl"
                tone="light"
                pulse
                subLabel="Takes under a minute · All 6 bonuses included"
                showSecure
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
