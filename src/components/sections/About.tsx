"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Zap, Target, Brain, Layers, Code2, Globe } from "lucide-react";
import { STATS } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion";

const ABOUT_HIGHLIGHTS = [
  {
    icon: <Brain size={18} />,
    title: "AI-Native Workflow",
    description: "Leverage Claude, ChatGPT, and Copilot daily to accelerate development velocity and code quality",
    color: "#CC785C",
  },
  {
    icon: <Zap size={18} />,
    title: "Performance Expert",
    description: "30%+ load time improvements through code splitting, lazy loading, and rendering optimization",
    color: "#F59E0B",
  },
  {
    icon: <Layers size={18} />,
    title: "Enterprise Scale",
    description: "Built production systems serving thousands of users across FSM, Fintech, EdTech domains",
    color: "#6366F1",
  },
  {
    icon: <Target size={18} />,
    title: "Delivery Focused",
    description: "40% faster feature delivery through systematic AI-assisted development workflows",
    color: "#06B6D4",
  },
  {
    icon: <Code2 size={18} />,
    title: "Architecture First",
    description: "Component-driven architecture with reusable systems, strong TypeScript typing, and clean patterns",
    color: "#8B5CF6",
  },
  {
    icon: <Globe size={18} />,
    title: "Full Stack Context",
    description: "Node.js, REST APIs, Docker, and AWS familiarity — building frontend with backend perspective",
    color: "#10A37F",
  },
];

const JOURNEY = [
  {
    year: "Aug 2022",
    title: "Junior SWE @ Brigosha",
    detail: "Delivered 15+ responsive React components across 3 product modules. Built strong foundations in API integration and Agile workflows.",
    color: "#F59E0B",
  },
  {
    year: "May 2024",
    title: "Freelance — TGC & Seoak",
    detail: "Built a React+Redux gaming dashboard for TGC Technologies and an SEO-optimized Next.js e-learning platform for Seoak with Cashfree payment integration.",
    color: "#8B5CF6",
  },
  {
    year: "Jan 2025",
    title: "Software Engineer @ OpenTurf",
    detail: "Built core Fintech modules — BizOps, Treasury, Liquidity dashboards. Improved load performance by ~30% through code splitting and lazy loading.",
    color: "#06B6D4",
  },
  {
    year: "Sep 2025",
    title: "SDE-1 @ Zinier · Present",
    detail: "Engineering low-code FSM platform with JSON-driven UI for 5+ enterprise clients. Leveraging AI tools to reduce feature turnaround by ~35%.",
    color: "#6366F1",
  },
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="relative group glass rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-all duration-300 text-center overflow-hidden"
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-1 leading-tight">
          {inView ? (
            <CountUp start={0} end={stat.value} duration={2} delay={index * 0.2} />
          ) : (
            <span>0</span>
          )}
          <span className="text-accent">{stat.suffix}</span>
        </div>
        <p className="text-muted text-sm font-medium leading-snug mt-1">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">About</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            The <span className="gradient-text">Engineer</span> Behind the Code
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            AI-Native Frontend Engineer who ships enterprise-grade applications with the speed and quality
            of a modern product team.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>

        {/* Main content — glass card wrapping both columns */}
        <div className="glass rounded-3xl border border-white/5 p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Story */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-5"
            >
              <p className="text-foreground text-lg font-semibold leading-snug">
                I don&apos;t just write code — I engineer experiences.
              </p>
              <div className="space-y-4 text-muted leading-relaxed text-sm md:text-base">
                <p>
                  With <span className="text-foreground font-medium">3+ years of production experience</span>, I&apos;ve shipped
                  enterprise applications across four distinct domains: Field Service Management, Fintech,
                  EdTech, and Gaming.
                </p>
                <p>
                  My superpower is <span className="text-accent font-medium">AI-native development</span> — I use
                  Claude, ChatGPT, GitHub Copilot, and Cursor not as crutches, but as{" "}
                  <span className="text-foreground font-medium">force multipliers</span>. The result: 40% faster
                  delivery without sacrificing quality.
                </p>
                <p>
                  At Zinier, I&apos;m engineering a low-code FSM platform with JSON-driven dynamic UI systems —
                  a deeply complex domain where every pixel and interaction serves enterprise workflows
                  used globally.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["React.js", "TypeScript", "Next.js", "Redux", "Tailwind", "Node.js", "Docker", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass-light text-xs text-muted border border-white/5 rounded-lg font-mono hover:border-accent/30 hover:text-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Journey Timeline */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3 className="text-xs font-mono font-medium text-muted uppercase tracking-widest mb-6">Career Journey</h3>
              <div className="relative pl-6">
                <div className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent" />
                {JOURNEY.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="relative mb-6 last:mb-0"
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                  >
                    <div
                      className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full border-2 border-background"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                    />
                    <div className="glass-light rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                          style={{ color: item.color, backgroundColor: item.color + "20" }}
                        >
                          {item.year}
                        </span>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      </div>
                      <p className="text-muted text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ABOUT_HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default"
              whileHover={{ y: -3 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: item.color + "20", color: item.color }}
              >
                {item.icon}
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-muted text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
