"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitBranch, GitCommit, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const LANGUAGES = [
  { name: "TypeScript", percent: 42, color: "#3178C6" },
  { name: "JavaScript", percent: 28, color: "#F7DF1E" },
  { name: "CSS/SCSS", percent: 15, color: "#06B6D4" },
  { name: "HTML", percent: 10, color: "#E34F26" },
  { name: "Shell", percent: 5, color: "#4ADE80" },
];

const GITHUB_STATS = [
  { label: "Public Repos", value: "25+", icon: <GithubIcon size={18} />, color: "#6366F1" },
  { label: "Total Commits", value: "800+", icon: <GitCommit size={18} />, color: "#06B6D4" },
  { label: "Pull Requests", value: "150+", icon: <GitBranch size={18} />, color: "#8B5CF6" },
  { label: "Stars Earned", value: "40+", icon: <Star size={18} />, color: "#F59E0B" },
];

function ContributionGraph() {
  const weeks = 26;
  const days = 7;
  const levelColors = [
    "bg-white/5",
    "bg-accent/20",
    "bg-accent/40",
    "bg-accent/70",
    "bg-accent",
  ];

  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(() => {
    setGrid(
      Array.from({ length: weeks }, () =>
        Array.from({ length: days }, () => Math.floor(Math.random() * 5))
      )
    );
  }, []);

  if (grid.length === 0) return (
    <div className="h-[116px] animate-pulse bg-white/5 rounded-lg" />
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-max">
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <motion.div
                key={di}
                className={`w-3 h-3 rounded-sm ${levelColors[level]} cursor-pointer`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.002, duration: 0.2 }}
                whileHover={{ scale: 1.4 }}
                title={`${level * 2} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 mt-2 justify-end">
        <span className="text-xs text-muted mr-1">Less</span>
        {levelColors.map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
        ))}
        <span className="text-xs text-muted ml-1">More</span>
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="github" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">GitHub</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Code <span className="gradient-text">Activity</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-xl mx-auto mt-4">
            Consistent contributor. Open source enthusiast. Always shipping.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {GITHUB_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/10 text-center transition-all duration-300"
              whileHover={{ y: -3 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: stat.color + "20", color: stat.color }}
              >
                {stat.icon}
              </div>
              <div className="font-display font-bold text-2xl mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <p className="text-muted text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass rounded-2xl p-6 border border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground text-sm">Contribution Graph (last 6 months)</h3>
              <span className="text-xs text-muted font-mono">~800+ contributions</span>
            </div>
            <ContributionGraph />
          </motion.div>

          {/* Top languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 border border-white/5"
          >
            <h3 className="font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
              <Code2 size={14} className="text-accent" />
              Top Languages
            </h3>
            <div className="space-y-3">
              {LANGUAGES.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">{lang.name}</span>
                    <span className="text-xs font-mono" style={{ color: lang.color }}>{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.percent}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href="https://github.com/NaveenRamdas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
              >
                <GithubIcon size={12} />
                github.com/NaveenRamdas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
