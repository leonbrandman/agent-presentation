"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const agents = [
  { name: "Marketing Agent", sub: "Campaigns & outreach", color: "#3b82f6" },
  { name: "Finance Agent", sub: "Budget rules — no exceptions", color: "#3fb950" },
  { name: "QA Agent", sub: "Validates before every delivery", color: "#d29922" },
];

const cards = [
  { icon: "🎯", title: "Single Agent", desc: "Handles everything. Simple. Right for 80% of use cases." },
  { icon: "👥", title: "Multi-Agent", desc: "Expert per domain. Right when isolation is critical." },
  { icon: "⚖️", title: "When to split?", desc: "Only with a real reason. Complexity is always a cost." },
];

export default function Slide12MultiAgent() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">Multi-Agent</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            When One Isn't Enough
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            Divide by domain. Isolate responsibility. Prevent mistakes through specialization.
          </motion.p>
        </div>

        {/* Org chart — CEO appears first, agents branch in */}
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "28px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", color: "var(--primary-light)", letterSpacing: "0.04em" }}>CEO Agent (Orchestrator)</span>
            <span style={{ fontSize: "15px", color: "var(--text-muted)", marginLeft: "20px", opacity: 0.6 }}>Receives all requests · Delegates · Synthesizes results</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.12 }}
                style={{ paddingRight: "32px", paddingLeft: i > 0 ? "32px" : 0, borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}
              >
                <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "20px", color: a.color, marginBottom: "6px" }}>{a.name}</div>
                <div style={{ fontSize: "17px", color: "var(--text-muted)" }}>{a.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.72 }}
          style={{ borderLeft: "2px solid var(--border)", paddingLeft: "28px" }}
        >
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--text)", fontWeight: 700 }}>Specialization prevents mistakes.</strong>{" "}
            A Finance Agent enforces rules even if the orchestrator forgets. In AI: hard rules can't be overridden by softer agents.
          </p>
        </motion.div>

        {/* When to split */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--border)", paddingTop: "28px", gap: "0" }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.84 + i * 0.1 }}
              style={{ paddingRight: "32px", paddingLeft: i > 0 ? "32px" : 0, borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}
            >
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>{c.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "18px", marginBottom: "6px" }}>{c.title}</div>
              <div style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.5 }}>{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={12} total={15} label="SOLUTION" />
    </div>
  );
}
