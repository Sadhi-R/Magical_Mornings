"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Sparkles, Users } from "lucide-react";
import { finalCta, offer, socialProof } from "@/data/content";
import { CTAButton } from "@/components/ui/CTAButton";
import { OfferCountdown } from "@/components/ui/OfferCountdown";
import { defaultTransition, fadeUp, staggerContainer } from "@/lib/motion";

const trustItems = [
  { icon: Shield, label: "Secure Razorpay checkout" },
  { icon: Users, label: "1,000+ community members" },
  { icon: Lock, label: "Instant confirmation" },
];

export function FinalCTA() {
  return (
    <section id="join" className="section-gradient relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-navy/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[80%] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[18%] text-accent/25"
        animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-14 w-14" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[10%] bottom-[20%] text-primary-light/25"
        animate={{ rotate: [0, -10, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-10 w-10" />
      </motion.div>

      <div className="section-container relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} transition={defaultTransition}>
            <span className="badge-urgency-on-dark">{socialProof.urgency}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={defaultTransition}
            className="text-section-title mt-8 text-white"
          >
            {finalCta.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="text-body-lg mx-auto mt-6 max-w-2xl text-white/70"
          >
            {finalCta.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} transition={defaultTransition} className="mx-auto mt-10 max-w-xl">
            <OfferCountdown variant="hero" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <CTAButton
              label={finalCta.cta}
              size="xl"
              pulse
              subLabel={`Only ${offer.seatsLeft} seats left in this batch`}
              showSecure
            />
            <CTAButton
              label="See What's Inside"
              variant="outline-dark"
              size="large"
              showArrow={false}
              href="#framework"
              external={false}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-4 text-sm text-white/45"
          >
            {finalCta.secondaryNote}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/75">
                <Icon className="h-4 w-4 text-accent-light" aria-hidden />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
