"use client";

import { motion } from "framer-motion";
import { Flame, Users } from "lucide-react";
import { offer } from "@/data/content";

type OfferCountdownProps = {
  variant?: "hero" | "card" | "compact" | "sticky";
  className?: string;
};

export function OfferCountdown({ variant = "card", className = "" }: OfferCountdownProps) {
  const seatsTaken = Math.max(0, offer.totalSeats - offer.seatsLeft);
  const filledPercent = Math.min(100, Math.round((seatsTaken / offer.totalSeats) * 100));

  if (variant === "compact") {
    return (
      <div className={`flex flex-wrap items-center gap-2 text-xs font-bold ${className}`}>
        <Flame className="h-3.5 w-3.5 text-accent" aria-hidden />
        <span className="text-accent-light">{offer.headline}</span>
        <span className="text-white/40">·</span>
        <span className="text-accent-light">Only {offer.seatsLeft} seats left</span>
      </div>
    );
  }

  if (variant === "sticky") {
    return (
      <div className={`flex items-center justify-between gap-2 text-[10px] font-bold ${className}`}>
        <span className="flex items-center gap-1 text-accent-light">
          <Flame className="h-3 w-3" aria-hidden />
          {offer.headline}
        </span>
        <span className="text-accent-light">Only {offer.seatsLeft} seats left</span>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <motion.div
      className={`overflow-hidden rounded-2xl border ${
        isHero
          ? "border-white/25 bg-white/10 backdrop-blur-md"
          : "border-primary/20 bg-white shadow-card"
      } ${className}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                isHero ? "text-accent-light" : "text-primary"
              }`}
            >
              <Flame className="h-4 w-4" aria-hidden />
              {offer.headline}
            </p>
            <p className={`mt-1 text-sm ${isHero ? "text-white/80" : "text-muted"}`}>
              {offer.subline}
            </p>
          </div>
          <div
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
              isHero ? "bg-white/20 text-white" : "bg-primary-soft text-primary"
            }`}
          >
            <Users className="h-3.5 w-3.5" aria-hidden />
            Only {offer.seatsLeft} seats left
          </div>
        </div>

        <div
          className={`mt-4 h-2 w-full overflow-hidden rounded-full ${
            isHero ? "bg-white/20" : "bg-slate-200"
          }`}
          role="progressbar"
          aria-valuenow={filledPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Seats already booked"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent to-orange-500"
            style={{ width: `${filledPercent}%` }}
          />
        </div>

        <p
          className={`mt-3 text-center text-xs font-medium ${
            isHero ? "text-white/70" : "text-muted"
          }`}
        >
          {seatsTaken} of {offer.totalSeats} seats booked · {offer.bonusExpiryLabel}
        </p>
      </div>
    </motion.div>
  );
}
