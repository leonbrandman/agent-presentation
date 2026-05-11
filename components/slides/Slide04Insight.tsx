"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const steps = [
  { label: "Perceive", color: "#06b6d4", desc: "Reads context" },
  { label: "Reason", color: "#7c3aed", desc: "Plans next step" },
  { label: "Act", color: "#3b82f6", desc: "Uses a tool" },
  { label: "Learn", color: "#3fb950", desc: "Updates memory" },
];

export default function Slide04Insight() {
  return (
    <div className="slide" style={{ padding: 0, flexDirection: "row" }}>
      <div style={{ width: "38%", position: "relative", flexShrink: 0, order: 2 }}>
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80"
          alt="Robot thinking"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(270deg, rgba(7,8,15,0) 0%, rgba(7,8,15,0.12) 50%, rgba(7,8,15,0.98) 100%)" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "44px 56px 70px 72px", order: 1 }}>
        <span className="section-label">The Insight</span>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "36px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1.0 }}
          >
            What is an<br />AI Agent?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "28px" }}
          >
            <p style={{ fontSize: "25px", lineHeight: 1.65, color: "var(--text-muted)" }}>
              AI with <strong style={{ color: "var(--primary-light)", fontWeight: 700 }}>agency</strong> — it perceives,
              decides, acts, and learns to achieve goals with
              <strong style={{ color: "var(--cyan)", fontWeight: 700 }}> minimal human intervention.</strong>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            style={{ fontSize: "15px", color: "var(--text-muted)", opacity: 0.6 }}
          >
            Not a new model. A new architecture around the model.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid var(--border)", paddingTop: "24px", gap: "0" }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.45 + i * 0.09 }}
              style={{ paddingRight: "20px", paddingLeft: i > 0 ? "20px" : 0, borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}
            >
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "18px", color: s.color }}>{s.label}</div>
              <div style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={4} total={15} label="INSIGHT" />
    </div>
  );
}
