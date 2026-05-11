"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const parts = [
  { label: "Language Model", role: "The Brain", desc: "Processes and generates language", color: "#7c3aed" },
  { label: "Tools", role: "The Hands", desc: "Acts on the world — files, APIs, web", color: "#3b82f6" },
  { label: "Loop", role: "The Engine", desc: "Reasons iteratively until done", color: "#06b6d4" },
  { label: "Memory", role: "The Soul", desc: "Learns and persists across sessions", color: "#3fb950" },
];

export default function Slide05Formula() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">The Architecture</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            What makes an agent?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "20px", color: "var(--text-muted)" }}
          >
            Not a new model — a new architecture built around it.
          </motion.p>
        </div>

        {/* Formula — parts build one by one */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28 }}
          style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}
        >
          {parts.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.32 + i * 0.12 }}
              style={{ display: "flex", alignItems: "center", gap: "20px" }}
            >
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "40px", color: p.color, letterSpacing: "0.03em" }}>
                {p.label}
              </span>
              {i < parts.length - 1 && (
                <span style={{ fontSize: "28px", color: "var(--border)" }}>+</span>
              )}
            </motion.span>
          ))}

          <motion.span
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.32 + parts.length * 0.12, type: "spring", stiffness: 200, damping: 18 }}
            style={{ fontSize: "28px", color: "var(--text-muted)", margin: "0 8px" }}
          >
            =
          </motion.span>

          {/* "AI Agent" — enters then pulses with a purple glow forever */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.32 + parts.length * 0.12 + 0.14 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", color: "var(--primary-light)", letterSpacing: "0.03em" }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(167,139,250,0)",
                  "0 0 48px rgba(167,139,250,0.85)",
                  "0 0 0px rgba(167,139,250,0)",
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1.6, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              AI Agent
            </motion.span>
          </motion.span>
        </motion.div>

        {/* 4 roles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
          {parts.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.72 + i * 0.1 }}
              style={{ paddingRight: "32px", paddingLeft: i > 0 ? "32px" : 0, borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}
            >
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "12px", color: p.color, marginBottom: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.role}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "20px", marginBottom: "8px" }}>{p.label}</div>
              <div style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.55 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={5} total={15} label="SOLUTION" />
    </div>
  );
}
