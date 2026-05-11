"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const pains = [
  { icon: "↺", label: "Stateless", desc: "Resets to zero every single session" },
  { icon: "⏸", label: "Passive", desc: "Waits for prompts — never initiates" },
  { icon: "⊘", label: "Isolated", desc: "Can't touch your files or systems" },
  { icon: "✉", label: "Words only", desc: "Can't send, save, or execute" },
];

export default function Slide02Problem1() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label" style={{ color: "var(--danger)", borderBottomColor: "rgba(248,81,73,0.35)" }}>The Problem</span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1.0 }}
      >
        AI models are brilliant.<br />
        <span style={{ color: "var(--danger)" }}>And useless.</span>
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", flex: 1, alignItems: "center", marginTop: "32px" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          style={{ borderLeft: "2px solid var(--danger)", paddingLeft: "32px" }}
        >
          <p style={{ fontSize: "29px", lineHeight: 1.65, color: "var(--text-muted)", fontStyle: "italic" }}>
            "Every conversation starts at zero.<br />
            No memory. No action. No initiative.<br />
            You get <em style={{ color: "var(--text)", fontStyle: "normal", fontWeight: 600 }}>answers</em> — not{" "}
            <em style={{ color: "var(--primary-light)", fontStyle: "normal", fontWeight: 600 }}>outcomes</em>."
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px" }}>
          {pains.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
              style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}
            >
              <span style={{ fontSize: "32px", color: "var(--danger)", lineHeight: 1, display: "block", marginBottom: "12px", opacity: 0.6 }}>{p.icon}</span>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: "20px", marginBottom: "6px" }}>{p.label}</div>
              <div style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.5 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={2} total={15} label="PROBLEM" />
    </div>
  );
}
