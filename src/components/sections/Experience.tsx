"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Zap } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

function ExperienceCard({ exp, index }: { exp: typeof EXPERIENCE[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      className="relative"
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
        style={{ backgroundColor: expanded ? exp.color : "rgba(255,255,255,0.05)" }}
      />

      <motion.div
        className="ml-4 glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
        style={{
          borderColor: expanded ? exp.color + "30" : undefined,
          boxShadow: expanded ? `0 0 24px ${exp.color}10` : "none",
        }}
        whileHover={{ y: -2 }}
      >
        {/* Card header (always visible) */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-5 md:p-6"
        >
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-base shrink-0 mt-0.5"
              style={{ backgroundColor: exp.color + "20", color: exp.color }}
            >
              {exp.logo}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-semibold text-foreground text-base leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>
                    {exp.role}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-muted shrink-0 mt-0.5"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={10} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {exp.location}
                </span>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ color: exp.color, backgroundColor: exp.color + "15" }}
                >
                  {exp.type}
                </span>
              </div>
            </div>
          </div>

          <p className="text-muted text-sm leading-relaxed mt-3 text-left">{exp.description}</p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {exp.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-md glass-light text-muted border border-white/5 font-mono">
                {t}
              </span>
            ))}
          </div>
        </button>

        {/* Achievements (expandable) */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="achievements"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 border-t border-white/5 pt-4">
                <h4 className="text-xs font-mono font-medium text-muted uppercase tracking-wider mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Zap size={11} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">Experience</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Where I&apos;ve <span className="gradient-text">Built Things</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-xl mx-auto mt-4">
            3+ years shipping production applications across enterprise domains
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
