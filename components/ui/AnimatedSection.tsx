"use client";

import { motion, type Variants } from "framer-motion";
import { defaultTransition, fadeUp } from "@/lib/motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function AnimatedSection({
  children,
  className = "",
  id,
  dark = false,
}: AnimatedSectionProps) {
  const bg = dark ? "bg-dark text-white" : "bg-white text-dark";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp as Variants}
        transition={defaultTransition}
      >
        {children}
      </motion.div>
    </section>
  );
}
