"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "#6366F1",
  Backend: "#06B6D4",
  DevOps: "#F59E0B",
  "AI Tools": "#CC785C",
};

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}60` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

function SkillCard({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="font-medium text-sm text-foreground">{name}</span>
          <div
            className="text-xs font-bold font-mono px-1.5 py-0.5 rounded"
            style={{ color, backgroundColor: color + "20" }}
          >
            {level}%
          </div>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = Object.keys(TECH_STACK);
  const activeColor = CATEGORY_COLORS[activeCategory];
  const activeSkills = TECH_STACK[activeCategory as keyof typeof TECH_STACK];

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Glow behind section */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: activeColor }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">Skills</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            My <span className="gradient-text">Technical Arsenal</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-xl mx-auto mt-4">
            Modern stack built for scale, performance, and AI-native development
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const catColor = CATEGORY_COLORS[cat];
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground glass"
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-cat"
                    className="absolute inset-0 rounded-xl border"
                    style={{
                      backgroundColor: catColor + "15",
                      borderColor: catColor + "40",
                      boxShadow: `0 0 15px ${catColor}30`,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skill cards */}
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20"
        >
          {activeSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={skill.color}
              index={i}
            />
          ))}
        </motion.div>

        {/* All skills in bar format for comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {Object.entries(TECH_STACK)
            .slice(0, 2)
            .map(([cat, skills]) => (
              <div key={cat} className="glass rounded-2xl p-6 border border-white/5">
                <h3
                  className="font-display font-semibold text-base mb-5 pb-3 border-b border-white/5"
                  style={{ color: CATEGORY_COLORS[cat] }}
                >
                  {cat}
                </h3>
                <div className="space-y-4">
                  {skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} />
                  ))}
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
