"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 glass border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="nav-logo-icon">
              N
            </div>
            <span className="font-display font-semibold text-foreground text-sm tracking-tight">
              naveen<span className="text-accent">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  )}
                  whileHover={{ y: -1 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="nav-active-bg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={SITE_CONFIG.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-white rounded-lg transition-all duration-200 shadow-glow-accent"
              style={{ transition: "background-color 200ms ease, transform 200ms ease" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(79,82,245,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-muted hover:text-foreground rounded-lg glass"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl border border-white/10 p-4 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted hover:text-foreground hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2">
                <a
                  href={SITE_CONFIG.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-accent hover:bg-accent/10 rounded-xl transition-colors"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
