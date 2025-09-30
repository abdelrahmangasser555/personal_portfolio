"use client";
import React from "react";
import { motion, type Variants } from "motion/react";
import { LineShadowText } from "./fuzzy_text";
import { Redo, Undo } from "lucide-react";

export const AnimatedTeamArrow = ({ className }: { className?: string }) => {
  // Animation variants for the wiggling effect
  const wiggleVariants: Variants = {
    wiggle: {
      rotate: [-20, -60, -30, -60, -20],
      transition: {
        duration: 2,
        repeat: 5,
        repeatType: "loop" as const,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  // Animation variants for entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
    },
  };

  return (
    <motion.div
      className={`relative pointer-events-none flex items-center justify-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* Animated Undo icon - tilted left with wiggle */}

      <Undo className="w-6 h-6 lg:w-8 lg:h-8 -rotate-65" />

      {/* Animated "My Team" text */}
      <motion.h1
        className="text-2xl lg:text-3xl font-bold text-center mx-4 pb-3"
        variants={textVariants}
      >
        My Team
      </motion.h1>

      {/* Animated Redo icon - tilted right with wiggle */}
    </motion.div>
  );
};
