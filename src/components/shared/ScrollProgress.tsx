"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
      }}
    />
  );
}
