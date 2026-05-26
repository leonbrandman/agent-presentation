"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const parts = [
  { label: "LLM", role: "המוח", desc: "מעבד ומייצר שפה", color: "#7c3aed" },
  { label: "Tools", role: "הידיים", desc: "פועל בעולם — קבצים, APIs, רשת", color: "#3b82f6" },
  { label: "Loop", role: "המנוע", desc: "חושב באופן איטרטיבי עד השלמת המשימה", color: "#06b6d4" },
  { label: "Memory", role: "הנשמה", desc: "לומד ונשמר בין סשנים", color: "#3fb950" },
];

export default function Slide05Formula() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">הארכיטקטורה</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            ממה בנוי Agent?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "20px", color: "var(--text-muted)" }}
          >
            לא מודל חדש — ארכיטקטורה חדשה שנבנית סביבו.
          </motion.p>
        </div>

        {/* Formula — parts build one by one */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28 }}
          style={{ borderRight: "3px solid var(--primary)", paddingRight: "32px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", flexDirection: "row-reverse" }}
        >
          {parts.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.32 + i * 0.12 }}
              style={{ display: "flex", alignItems: "center", gap: "20px", flexDirection: "row-reverse" }}
            >
              <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "40px", color: p.color, letterSpacing: "0.03em", direction: "ltr" }}>
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.32 + parts.length * 0.12 + 0.14 }}
            style={{ fontFamily: "'Secular One', sans-serif", fontSize: "48px", color: "var(--primary-light)", letterSpacing: "0.03em", direction: "ltr" }}
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
              style={{ paddingLeft: "32px", paddingRight: i > 0 ? "32px" : 0, borderRight: i > 0 ? "1px solid var(--border)" : "none" }}
            >
              <div style={{ fontFamily: "'Heebo'", fontWeight: 900, fontSize: "12px", color: p.color, marginBottom: "8px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.role}</div>
              <div style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "19px", marginBottom: "8px", direction: "ltr", textAlign: "right" }}>{p.label}</div>
              <div style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.55 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={5} total={15} label="פתרון" />
    </div>
  );
}
