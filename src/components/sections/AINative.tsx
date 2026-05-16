"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Zap, Brain, Code2, ArrowRight } from "lucide-react";
import { AI_TOOLS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const TERMINAL_LINES = [
  { delay: 0, text: "$ claude --task 'analyze component architecture'", color: "#94A3B8" },
  { delay: 600, text: "> Analyzing React component tree...", color: "#6366F1" },
  { delay: 1200, text: "> Found 3 performance bottlenecks", color: "#F59E0B" },
  { delay: 1800, text: "> Suggesting memoization for ProductList", color: "#06B6D4" },
  { delay: 2400, text: "> Generating optimized code...", color: "#8B5CF6" },
  { delay: 3000, text: "✓ Component optimized. Bundle -12KB", color: "#4ADE80" },
  { delay: 3600, text: "$ copilot --complete 'async fetchUserData'", color: "#94A3B8" },
  { delay: 4200, text: "> Auto-completing with error handling...", color: "#6E40C9" },
  { delay: 4800, text: "✓ Function completed with retry logic", color: "#4ADE80" },
];

const AI_WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Prompt Engineering",
    description: "Craft precise prompts to get architecture plans, code reviews, and complex debugging assistance",
    icon: <Brain size={20} />,
    color: "#CC785C",
  },
  {
    step: "02",
    title: "AI Code Generation",
    description: "Use v0, Copilot, and Claude to generate production-ready boilerplate and components",
    icon: <Code2 size={20} />,
    color: "#6366F1",
  },
  {
    step: "03",
    title: "Smart Debugging",
    description: "Feed stack traces and component trees to AI for rapid root cause analysis",
    icon: <Terminal size={20} />,
    color: "#06B6D4",
  },
  {
    step: "04",
    title: "Performance Reviews",
    description: "AI-assisted bundle analysis, rendering optimization, and lighthouse score improvement",
    icon: <Zap size={20} />,
    color: "#8B5CF6",
  },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const inView = useInView(useRef(null), { once: true });

  useEffect(() => {
    if (!inView) return;
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay + 500);
    });
  }, [inView]);

  return (
    <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-muted font-mono">naveen@ai-workspace — zsh</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm space-y-1 min-h-[260px]">
        {TERMINAL_LINES.map((line, i) => (
          <AnimatePresence key={i}>
            {visibleLines.includes(i) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2 leading-relaxed"
              >
                <span style={{ color: line.color }}>{line.text}</span>
                {i === visibleLines.length - 1 && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-accent ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}

export default function AINative() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="ai-native" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Unique gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1020] to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #CC785C, transparent)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#CC785C]" />
            <span className="text-sm font-mono font-medium tracking-widest uppercase" style={{ color: "#CC785C" }}>
              AI-Native
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#CC785C]" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Engineering with <span className="gradient-text">AI as Co-Pilot</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            I don&apos;t just use AI tools — I&apos;ve integrated them deeply into my engineering workflow.
            The result: <span className="text-foreground font-medium">40% faster delivery</span> with{" "}
            <span className="text-foreground font-medium">enterprise-grade quality</span>.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <TerminalWindow />
            <p className="text-muted text-xs text-center mt-3 font-mono">
              Real-world AI workflow simulation
            </p>
          </motion.div>

          {/* Workflow steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {AI_WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="group glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: step.color + "20", color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: step.color + "80" }}
                      >
                        {step.step}
                      </span>
                      <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* AI Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-display font-semibold text-foreground text-xl text-center mb-8">
            My AI Toolkit
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {AI_TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", bounce: 0.3 }}
                className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all text-center cursor-default"
                whileHover={{ y: -6, scale: 1.03 }}
                style={{
                  boxShadow: undefined,
                }}
              >
                <div
                  className="text-3xl mb-3 w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                  style={{ backgroundColor: tool.color + "15" }}
                >
                  {tool.icon}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
                <p className="text-muted text-xs leading-snug mb-2">{tool.description}</p>
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ color: tool.color, backgroundColor: tool.color + "20" }}
                >
                  {tool.usage}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 gradient-border p-px rounded-2xl"
        >
          <div className="bg-card rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "40%", label: "Faster Delivery", color: "#6366F1" },
                { value: "5+", label: "AI Tools Mastered", color: "#CC785C" },
                { value: "Daily", label: "AI Usage Frequency", color: "#06B6D4" },
                { value: "10x", label: "Debug Speed", color: "#8B5CF6" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-3xl mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <p className="text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
