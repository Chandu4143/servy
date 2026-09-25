/**
 * Reveal — scroll-triggered fade-up wrapper used by every section.
 * - Default: animates once when 25% visible (`whileInView`).
 * - `immediate`: animate on mount (hero / above-the-fold use).
 * - `delay` / `distance`: stagger + travel. Reduced-motion users get
 *   plain <div> with no animation. Keep durations short (~0.6s).
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the reveal starts. */
  delay?: number;
  /** Vertical distance travelled while revealing. */
  distance?: number;
  /** Reveal as soon as the element mounts instead of on scroll. */
  immediate?: boolean;
};

const Reveal = ({
  children,
  className,
  delay = 0,
  distance = 26,
  immediate = false,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const hidden = { opacity: 0, y: distance };
  const visible = { opacity: 1, y: 0 };
  const transition = {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return immediate ? (
    <motion.div
      className={className}
      initial={hidden}
      animate={visible}
      transition={transition}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.25 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
