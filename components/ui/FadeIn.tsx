"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  preset?: "fade" | "scale" | "blur";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  preset = "fade",
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  const getPresetInitial = () => {
    if (preset === "scale") return { scale: 0.96, opacity: 0 };
    if (preset === "blur") return { filter: "blur(6px)", opacity: 0 };
    return { opacity: 0, ...directions[direction] };
  };

  const getPresetAnimate = () => {
    if (preset === "scale") return { scale: 1, opacity: 1 };
    if (preset === "blur") return { filter: "blur(0px)", opacity: 1 };
    return { opacity: 1, x: 0, y: 0 };
  };

  // Accessible fallback for users requesting reduced motion
  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={getPresetInitial()}
      whileInView={getPresetAnimate()}
      viewport={{
        once: false, // Re-triggers animation indefinitely on scroll re-entry
        amount: 0.15, // Triggers when 15% of element is in view
        margin: "-10px",
      }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}