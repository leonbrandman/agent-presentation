"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const steps = [
  { n: 1, title: "Choose a Runtime", desc: "Claude Code, LangGraph, CrewAI, AutoGen. Manages the ReAct loop for you.", color: "#7c3aed" },
  { n: 2, title: "Write a Strong System Prompt", desc: "The agent's DNA. Who is it? What rules does it follow? How does it classify requests?", color: "#3b82f6" },
  { n: 3, title: "Connect Tools via MCP", desc: "MCP servers for every service the agent needs. Start with one. Add gradually.", color: "#06b6d4" },
  { n: 4, title: "Build Memory", desc: "Start with Semantic + Procedural. Add Episodic + Reflection after enough history.", color: "#3fb950" },
  { n: 5, title: "Add Multi-Agent (if needed)", desc: "Only when domains require critical isolation. Don't over-engineer for the sake of it.", color: "#d29922" },
  { n: 6, title: "Add Decay + Retrieval", desc: "Every memory gets stale. Tag with last_verified, add semantic search, flag outdated entries.", color: "#f85149" },
];

export default function Slide13Build6() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">Build from Scratch</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}>
            How to Build an Agent:<br />6 Steps
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.15 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "flex", gap: "20px", alignItems: "flex-start",
                paddingTop: i >= 2 ? "24px" : 0,
                paddingBottom: i < steps.length - 2 ? "24px" : 0,
                paddingRight: i % 2 === 0 ? "48px" : 0,
                paddingLeft: i % 2 === 1 ? "48px" : 0,
                borderTop: i >= 2 ? "1px solid var(--border)" : "none",
                borderLeft: i % 2 === 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span style={{
                fontFamily: "'Bebas Neue', sans-serif", fontSize: "52px",
                color: s.color, lineHeight: 1, flexShrink: 0,
                opacity: 0.75, letterSpacing: "0.02em", marginTop: "-4px",
              }}>
                {s.n}
              </span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: "18px", marginBottom: "6px", color: s.color }}>{s.title}</div>
                <div style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={13} total={15} label="SOLUTION" />
    </div>
  );
}
