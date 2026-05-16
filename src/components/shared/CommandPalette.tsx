"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X, Command } from "lucide-react";
import { COMMAND_PALETTE_ITEMS } from "@/lib/constants";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMAND_PALETTE_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.section.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter") {
        const item = filtered[selectedIndex];
        if (item) handleSelect(item);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, filtered, selectedIndex]);

  const handleSelect = (item: (typeof COMMAND_PALETTE_ITEMS)[0]) => {
    if (item.href.startsWith("#")) {
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(item.href, "_blank");
    }
    onClose();
  };

  const grouped = filtered.reduce<Record<string, typeof filtered>>((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[80]"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[90]"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(560px, calc(100vw - 32px))",
            }}
          >
            <div
              style={{
                background: "rgba(15,15,20,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              {/* Search bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Search size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search commands or navigate..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "var(--fg)",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                />
                <button
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--muted)",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <X size={12} />
                </button>
              </div>

              {/* Results */}
              <div style={{ maxHeight: 360, overflowY: "auto", padding: "8px 0" }}>
                {filtered.length === 0 ? (
                  <div
                    style={{
                      padding: "40px 16px",
                      textAlign: "center",
                      color: "var(--muted)",
                      fontSize: 13,
                    }}
                  >
                    No results for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  Object.entries(grouped).map(([section, items]) => (
                    <div key={section}>
                      <p
                        style={{
                          padding: "6px 16px 4px",
                          fontSize: 10,
                          fontFamily: "var(--font-jetbrains, monospace)",
                          color: "rgba(160,160,180,0.5)",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {section}
                      </p>
                      {items.map((item) => {
                        const globalIndex = filtered.indexOf(item);
                        const isSelected = globalIndex === selectedIndex;
                        return (
                          <motion.button
                            key={item.id}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            initial={false}
                            animate={{
                              backgroundColor: isSelected
                                ? "rgba(99,102,241,0.12)"
                                : "rgba(0,0,0,0)",
                            }}
                            transition={{ duration: 0.1 }}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "10px 16px",
                              cursor: "pointer",
                              border: "none",
                              textAlign: "left",
                              borderLeft: isSelected
                                ? "2px solid var(--accent)"
                                : "2px solid transparent",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 16,
                                width: 28,
                                height: 28,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 8,
                                background: isSelected
                                  ? "rgba(99,102,241,0.15)"
                                  : "rgba(255,255,255,0.04)",
                                flexShrink: 0,
                              }}
                            >
                              {item.icon}
                            </span>
                            <span
                              style={{
                                flex: 1,
                                fontSize: 13,
                                fontWeight: 500,
                                color: isSelected ? "var(--fg)" : "var(--muted)",
                              }}
                            >
                              {item.label}
                            </span>
                            {isSelected && (
                              <motion.span
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                style={{ color: "var(--accent)" }}
                              >
                                <ArrowRight size={13} />
                              </motion.span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "10px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {[
                  { keys: ["↑", "↓"], label: "navigate" },
                  { keys: ["↵"], label: "select" },
                  { keys: ["esc"], label: "close" },
                ].map(({ keys, label }) => (
                  <span
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 11,
                      color: "rgba(160,160,180,0.4)",
                    }}
                  >
                    {keys.map((k) => (
                      <kbd
                        key={k}
                        style={{
                          padding: "1px 5px",
                          borderRadius: 4,
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "monospace",
                          fontSize: 10,
                          color: "rgba(200,200,220,0.6)",
                        }}
                      >
                        {k}
                      </kbd>
                    ))}
                    {label}
                  </span>
                ))}
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "rgba(160,160,180,0.3)" }}>
                  <Command size={10} />
                  K
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
