"use client";

import { motion, useReducedMotion } from "framer-motion";

type DotGridProps = {
  className?: string;
  columns?: number;
  rows?: number;
  dotSize?: number;
  /** Colour of every dot; defaults to whatever `currentColor` resolves to. */
  color?: string;
};

/**
 * Decorative animated dot grid used behind the indigo bands — the same
 * "field of small dots" texture used on the reference layout.
 */
const DotGrid = ({
  className = "",
  columns = 8,
  rows = 9,
  dotSize = 5,
  color = "currentColor",
}: DotGridProps) => {
  const shouldReduceMotion = useReducedMotion();
  const total = columns * rows;

  return (
    <div
      className={`pointer-events-none grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "0.75rem",
      }}
      aria-hidden="true"
    >
      {Array.from({ length: total }).map((_, index) => (
        <motion.span
          key={index}
          className="block justify-self-center rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
          }}
          initial={{ opacity: 0.25 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.25 }
              : { opacity: [0.15, 0.75, 0.15] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (index % columns) * 0.12 + (index % rows) * 0.06,
                }
          }
        />
      ))}
    </div>
  );
};

export default DotGrid;
