"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const types = [
  { icon: "🧠", name: "Semantic", role: "What is known", desc: "Stable facts about the user. Long-lived, rarely changes.", example: '"Vegetarian. Lives in Tel Aviv. Drinks espresso, no sugar."', color: "#7c3aed" },
  { icon: "⚙️", name: "Procedural", role: "What works", desc: "Learned behaviors and preferences. How the agent should act.", example: '"Max 3 options. No long bullet lists. Hebrew UI, English logic."', color: "#3b82f6" },
  { icon: "📅", name: "Episodic", role: "What happened", desc: "Timestamped events — a detailed log of past interactions.", example: '"Apr 15 — booked Jaffa restaurant. May 2 — date night ideas."', color: "#06b6d4" },
  { icon: "💡", name: "Reflection", role: "What patterns emerge", desc: "Synthesized insights generated across all memory types.", example: '"Prefers quiet spots Fridays. Livelier venues on Saturdays."', color: "#3fb950" },
];

export default function Slide10Memory4() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">Memory</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "36px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            4 Types of Agent Memory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            Without memory, an agent is a <strong style={{ color: "var(--danger)" }}>tool</strong>. With memory, it's a <strong style={{ color: "var(--primary-light)" }}>partner</strong>.
          </motion.p>
        </div>

        {/* 2×2 — border separators, stagger diagonally */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
          {types.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.28 + i * 0.12 }}
              style={{
                borderLeft: `3px solid ${t.color}`,
                paddingLeft: "28px",
                paddingRight: "48px",
                paddingTop: i >= 2 ? "32px" : 0,
                paddingBottom: i < 2 ? "32px" : 0,
                borderTop: i >= 2 ? "1px solid var(--border)" : "none",
                marginLeft: i % 2 === 1 ? "40px" : 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <span style={{ fontSize: "28px", lineHeight: 1 }}>{t.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "22px", color: t.color, lineHeight: 1 }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "3px" }}>{t.role}</div>
                </div>
              </div>
              <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "10px" }}>{t.desc}</p>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", fontStyle: "italic", opacity: 0.65 }}>{t.example}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={10} total={15} label="SOLUTION" />
    </div>
  );
}
