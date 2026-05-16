"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Download, CheckCircle2, MapPin, Clock, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 opacity-10 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, #6366F1, transparent)" }} />

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
            <span className="text-accent text-sm font-mono font-medium tracking-widest uppercase">Contact</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Let&apos;s <span className="gradient-text">Build Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted text-lg max-w-xl mx-auto mt-4">
            Open to opportunities, collaborations, and interesting conversations
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {/* Status */}
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                <span className="text-green-400 font-medium text-sm">Available for work</span>
              </div>
              <p className="text-muted text-xs leading-relaxed">
                Currently open to full-time roles and interesting freelance projects in Frontend/Full-Stack engineering.
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeInLeft} className="space-y-3">
              {[
                { icon: <Mail size={16} />, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: "#6366F1" },
                { icon: <MessageCircle size={16} />, label: "WhatsApp", value: "+91 9071955066", href: SITE_CONFIG.whatsapp, color: "#25D366" },
                { icon: <LinkedInIcon size={16} />, label: "LinkedIn", value: "naveen21r", href: SITE_CONFIG.linkedin, color: "#0A66C2" },
                { icon: <GithubIcon size={16} />, label: "GitHub", value: "NaveenRamdas", href: SITE_CONFIG.github, color: "#6E40C9" },
                { icon: <MapPin size={16} />, label: "Location", value: "Bangalore, India", href: null, color: "#F59E0B" },
                { icon: <Clock size={16} />, label: "Timezone", value: "IST (UTC +5:30)", href: null, color: "#06B6D4" },
              ].map(({ icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 glass rounded-xl p-3 border border-white/5 hover:border-white/10 transition-all"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: color + "20", color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-muted text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-foreground text-sm hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Resume CTA */}
            <motion.div variants={fadeInLeft}>
              <a
                href={SITE_CONFIG.resumeUrl}
                download
                className="flex items-center gap-2 w-full justify-center px-5 py-3 glass rounded-xl border border-accent/20 text-accent font-medium text-sm hover:bg-accent/10 transition-all duration-200"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/5 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/40 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/40 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/40 outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden"
                style={{
                  background: status === "sent"
                    ? "linear-gradient(135deg, #4ADE80, #22C55E)"
                    : "linear-gradient(135deg, #6366F1, #8B5CF6)",
                }}
                whileHover={status === "idle" ? { scale: 1.01, y: -1 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
              >
                {status === "idle" && (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <motion.div
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </>
                )}
              </motion.button>

              <p className="text-muted text-xs text-center">
                I typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
