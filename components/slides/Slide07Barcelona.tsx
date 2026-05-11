"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const steps = [
  { type: "THINK", cls: "badge-think", text: "Need real-time prices + date range. I don't have this — must use a tool." },
  { type: "ACT", cls: "badge-act", text: "get_date() → today is May 11, 2026. Next weekend = May 17–18." },
  { type: "ACT", cls: "badge-act", text: "search_flights(origin=TLV, dest=BCN, dates=May 17–18)" },
  { type: "OBSERVE", cls: "badge-observe", text: "3 results: ₪1,200 / ₪1,450 / ₪980 (Wizz Air, departs 06:40, Sat May 17)" },
  { type: "THINK", cls: "badge-think", text: "Enough data. Cheapest is ₪980 on Wizz Air. Ready to answer." },
  { type: "ANSWER", cls: "badge-answer", text: '"₪980 on Wizz Air, Saturday May 17, departs 06:40."' },
];

export default function Slide07Barcelona() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">ReAct in Action</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "16px" }}
          >
            The Barcelona Example
          </motion.h2>

          {/* Terminal-style user query with blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "14px", borderLeft: "2px solid var(--border)", paddingLeft: "20px" }}
          >
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'", letterSpacing: "0.1em", opacity: 0.5 }}>USER ASKS:</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0" }}>
              {/* Blinking terminal cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.65, repeat: Infinity, repeatType: "reverse" }}
                style={{ fontFamily: "'JetBrains Mono'", fontSize: "18px", color: "var(--primary)", marginRight: "6px", lineHeight: 1 }}
              >
                ▋
              </motion.span>
              <span style={{ fontSize: "19px", color: "var(--text)", fontStyle: "italic" }}>"How much is a flight to Barcelona next weekend?"</span>
            </span>
          </motion.div>
        </div>

        {/* Staggered steps */}
        <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "28px" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.35 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                paddingTop: i > 0 ? "16px" : 0,
                paddingBottom: i < steps.length - 1 ? "16px" : 0,
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span className={`badge ${s.cls}`} style={{ flexShrink: 0, minWidth: "80px", justifyContent: "center", marginTop: "2px", fontSize: "11px" }}>
                {s.type}
              </span>
              <span style={{
                fontSize: "19px",
                color: s.type === "ANSWER" ? "var(--primary-light)" : "var(--text-muted)",
                lineHeight: 1.45,
                fontWeight: s.type === "ANSWER" ? 600 : 400,
                fontStyle: s.type === "ANSWER" ? "italic" : "normal",
              }}>
                {s.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.4 }}
          style={{ display: "flex", gap: "14px", alignItems: "flex-start", opacity: 0.65 }}
        >
          <span style={{ fontSize: "15px" }}>⚠</span>
          <p style={{ fontSize: "17px", color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--danger)" }}>Regular model: </strong>
            <em>"I don't have access to real-time flight data."</em> — Technically correct. Completely useless.
          </p>
        </motion.div>
      </div>

      <SlideNav current={7} total={15} label="SOLUTION" />
    </div>
  );
}
