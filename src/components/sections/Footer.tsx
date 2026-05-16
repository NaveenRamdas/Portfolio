"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center font-display font-bold text-sm text-white shadow-glow-accent">
                N
              </div>
              <span className="font-display font-semibold text-foreground">
                naveen<span className="text-accent">.dev</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              AI-Native Frontend Engineer crafting scalable, performant web experiences with modern engineering.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: SITE_CONFIG.github, icon: <GithubIcon size={16} />, label: "GitHub" },
                { href: SITE_CONFIG.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
                { href: `mailto:${SITE_CONFIG.email}`, icon: <Mail size={16} />, label: "Email" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 glass rounded-lg text-muted hover:text-foreground hover:border-accent/20 border border-white/5 transition-all"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="block text-muted text-sm hover:text-accent transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
              <p className="text-muted text-sm">{SITE_CONFIG.location}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs flex items-center gap-1.5">
            Built with
            <Heart size={11} className="text-red-400 fill-red-400" />
            using React, Next.js & <Sparkles size={11} className="text-accent" /> AI
            <span className="mx-1">·</span>
            <span>© {new Date().getFullYear()} Naveen R</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground glass px-3 py-1.5 rounded-lg border border-white/5 hover:border-accent/20 transition-all"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
