"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Zap, Package, Trophy, Quote } from "lucide-react";
import { IMPACT_METRICS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote: "Naveen consistently delivers enterprise-grade components with exceptional attention to performance and user experience. His AI-native workflow has dramatically accelerated our team's delivery velocity.",
    author: "Engineering Lead",
    company: "Zinier Technologies",
    color: "#6366F1",
  },
  {
    quote: "The fintech dashboards Naveen built were clean, performant, and exactly what our finance teams needed. He thinks in terms of the user journey, not just the code.",
    author: "Product Manager",
    company: "Openturf Technologies",
    color: "#06B6D4",
  },
  {
    quote: "Working with Naveen on our gamification platform was seamless. He took complex requirements and turned them into an intuitive, polished product in record time.",
    author: "CEO",
    company: "TGC Technologies",
    color: "#8B5CF6",
  },
];

const ICON_MAP: Record<string, React.ReactNode> = {
  "⚡": <Zap size={24} />,
  "🚀": <TrendingUp size={24} />,
  "📦": <Package size={24} />,
  "🏆": <Trophy size={24} />,
};

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-secondary/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-secondary" />
            <span className="text-accent-secondary text-sm font-mono font-medium tracking-widest uppercase">Impact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-secondary" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Real <span className="gradient-text">Results</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-xl mx-auto mt-4">
            Measurable outcomes from 3+ years of engineering excellence
          </motion.p>
        </motion.div>

        {/* Impact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {IMPACT_METRICS.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}10, transparent 60%)` }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }}
              />

              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: item.color + "20", color: item.color }}
                >
                  {ICON_MAP[item.icon]}
                </div>
                <div
                  className="font-display font-bold text-4xl mb-1"
                  style={{ color: item.color }}
                >
                  {item.metric}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2">{item.label}</h4>
                <p className="text-muted text-xs leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <Quote
                size={24}
                className="mb-4 opacity-40"
                style={{ color: t.color }}
              />
              <p className="text-muted text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{ backgroundColor: t.color + "20", color: t.color }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{t.author}</p>
                  <p className="text-muted text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
