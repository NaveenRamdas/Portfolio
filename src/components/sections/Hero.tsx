"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Sparkles, Zap, Code2, Cpu, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { ROTATING_TITLES, SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const TECH_BADGES = ["React.js", "TypeScript", "Next.js", "AI-Native", "Redux", "Node.js"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const blobX = useTransform(smoothX, [0, 1440], [-25, 25]);
  const blobY = useTransform(smoothY, [0, 900], [-25, 25]);

  useEffect(() => {
    const currentTitle = ROTATING_TITLES[titleIndex];
    const speed = isDeleting ? 40 : 75;
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % ROTATING_TITLES.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" ref={containerRef} className="hero-section">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-mesh" />

      <motion.div
        className="blob blob-delay-2 absolute rounded-full"
        style={{
          top: "20%", left: "-10rem",
          width: 520, height: 520,
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
          opacity: 0.14, x: blobX, y: blobY,
        }}
      />
      <motion.div
        className="blob blob-delay-4 absolute rounded-full"
        style={{
          bottom: "20%", right: "-10rem",
          width: 500, height: 500,
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          opacity: 0.11,
        }}
      />
      <motion.div
        className="blob absolute rounded-full"
        style={{
          top: "70%", left: "30%",
          width: 300, height: 300,
          background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
          opacity: 0.08,
        }}
      />

      <div className="hero-content">
        <div className="hero-layout">

          {/* Left: Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-photo-col"
          >
            <div className="hero-photo-wrapper">
              <motion.div
                className="hero-photo-glow"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="hero-photo-ring-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="hero-photo-ring-static">
                <div className="hero-photo-ring-inner" />
              </div>
              <div className="hero-photo-img-wrapper">
                <Image
                  src="/Naveen_Photo.jpeg"
                  alt="Naveen R — AI-Native Frontend Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="hero-status-badge glass rounded-full"
            >
              <div className="status-dot" />
              <span className="status-text">Available for Opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="hero-social-row"
            >
              {[
                { href: SITE_CONFIG.github,   icon: <GithubIcon size={20} />,      label: "GitHub"    },
                { href: SITE_CONFIG.linkedin, icon: <LinkedInIcon size={20} />,    label: "LinkedIn"  },
                { href: `mailto:${SITE_CONFIG.email}`, icon: <Mail size={20} />,   label: "Email"     },
                { href: SITE_CONFIG.whatsapp, icon: <MessageCircle size={20} />,   label: "WhatsApp"  },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social-icon glass rounded-xl"
                  whileHover={{ scale: 1.14, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hero-text-col"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="hero-name font-display">
                Naveen <span className="gradient-text">R</span>
              </h1>
              <div className="hero-meta">
                <Sparkles style={{ width: 16, height: 16, color: "var(--accent)" }} />
                <span className="hero-meta-text text-muted">Bangalore, India&nbsp;·&nbsp;3+ Years</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-typewriter-row">
              <h2 className="hero-typewriter font-display">
                <span className="gradient-text-cyan">{displayText}</span>
                <motion.span
                  className="hero-cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="hero-description text-muted">
              Building{" "}
              <span className="text-foreground font-semibold">scalable, AI-powered web experiences</span>{" "}
              with modern frontend engineering. Specializing in{" "}
              <span className="text-accent font-semibold">React.js</span>,{" "}
              <span className="text-highlight font-semibold">TypeScript</span>, and{" "}
              <span style={{ color: "#8B5CF6", fontWeight: 600 }}>AI-assisted development</span>{" "}
              across Fintech, FSM, EdTech, and Gaming.
            </motion.p>

            <motion.div variants={fadeInUp} className="hero-chips">
              {[
                { icon: <Zap size={12} />,      text: "Performance-First"   },
                { icon: <Code2 size={12} />,    text: "Enterprise-Grade"    },
                { icon: <Cpu size={12} />,      text: "AI-Native Workflow"  },
                { icon: <Sparkles size={12} />, text: "Modern UI Architect" },
              ].map(({ icon, text }) => (
                <span key={text} className="hero-chip glass-light rounded-full">
                  <span className="text-accent">{icon}</span>
                  {text}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-tech-badges">
              {TECH_BADGES.map((t) => (
                <span key={t} className="hero-badge glass-light rounded-lg font-mono text-muted">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="hero-ctas">
              <motion.a
                href="#projects"
                className="hero-cta-primary rounded-xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary glass rounded-xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <MessageCircle size={15} style={{ color: "#25D366" }} />
                WhatsApp
              </motion.a>

              <motion.a
                href="#contact"
                className="hero-cta-secondary glass rounded-xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail size={15} style={{ color: "var(--highlight)" }} />
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="hero-scroll-label">Scroll</span>
        <motion.div
          className="hero-scroll-mouse"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="hero-scroll-dot" />
        </motion.div>
      </motion.div>
    </section>
  );
}
