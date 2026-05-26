"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

// The 4 positions in the agent loop (indices 1-4 in the display row)
const LOOP = [
  { t: "חשוב", tc: "#fbbf24", glow: "rgba(251,191,36,0.6)" },
  { t: "פעל", tc: "#93c5fd", glow: "rgba(147,197,253,0.6)" },
  { t: "תצפה", tc: "#86efac", glow: "rgba(134,239,172,0.6)" },
  { t: "חשוב", tc: "#fbbf24", glow: "rgba(251,191,36,0.6)" },
];

export default function Slide06ReAct() {
  const [cycleIdx, setCycleIdx] = useState(-1);

  // Start cycling after entrance animations settle
  useEffect(() => {
    const start = setTimeout(() => setCycleIdx(0), 1500);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (cycleIdx < 0) return;
    const t = setTimeout(() => setCycleIdx((p) => (p + 1) % LOOP.length), 850);
    return () => clearTimeout(t);
  }, [cycleIdx]);

  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">המנוע</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            לולאת ReAct
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "20px", color: "var(--text-muted)" }}
          >
            <strong style={{ color: "var(--primary-light)" }}>Re</strong>ason + <strong style={{ color: "var(--cyan)" }}>Act</strong> — הלולאה שכל Agent מריץ. הליבה של Agentic AI.
          </motion.p>
        </div>

        {/* Regular model */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ borderRight: "2px solid var(--border)", paddingRight: "28px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Heebo'", fontWeight: 700, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px", opacity: 0.6 }}>
            מודל רגיל — שאלה אחת, תשובה אחת
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", direction: "ltr" }}>
            {["שאלה", "תשובה"].map((t, i) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "22px", color: "var(--text-muted)" }}>{t}</span>
                {i === 0 && <span style={{ color: "var(--border)", fontSize: "22px" }}>→</span>}
              </span>
            ))}
            <span style={{ fontSize: "17px", color: "var(--text-muted)", marginLeft: "16px", opacity: 0.5 }}>ללא זיכרון. ללא כלים. ללא איטרציה.</span>
          </div>
        </motion.div>

        {/* Agent loop — live cycling */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          style={{ borderRight: "2px solid var(--primary)", paddingRight: "28px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Heebo'", fontWeight: 700, letterSpacing: "0.08em", color: "var(--primary-light)", textTransform: "uppercase", marginBottom: "16px", opacity: 0.8 }}>
            Agent — לולאת חשיבה איטרטיבית
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", direction: "ltr" }}>
            {/* Question — always visible */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.55, type: "spring", stiffness: 260, damping: 20 }}
              style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "22px", color: "var(--text-muted)" }}
            >
              שאלה
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ color: "var(--border)", fontSize: "20px" }}>→</motion.span>

            {/* The live loop — each token dims when not active */}
            {LOOP.map((item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <motion.span
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: cycleIdx < 0 ? 1 : cycleIdx === i ? 1 : 0.2,
                    scale: cycleIdx === i ? 1.1 : 1,
                    textShadow: cycleIdx === i
                      ? [`0 0 20px ${item.glow}`, `0 0 20px ${item.glow}`]
                      : "0 0 0px transparent",
                  }}
                  transition={{
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.25, type: "spring", stiffness: 300, damping: 18 },
                    textShadow: { duration: 0.25 },
                    ...(cycleIdx < 0 ? { delay: 0.58 + i * 0.1, duration: 0.3 } : {}),
                  }}
                  style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "22px", color: item.tc, display: "inline-block" }}
                >
                  {item.t}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }} animate={{ opacity: cycleIdx < 0 ? 1 : cycleIdx === i ? 0.9 : 0.2 }}
                  transition={{ duration: 0.25, ...(cycleIdx < 0 ? { delay: 0.62 + i * 0.1 } : {}) }}
                  style={{ color: "var(--border)", fontSize: "20px" }}
                >
                  →
                </motion.span>
              </span>
            ))}

            {/* Answer — always visible */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0, type: "spring", stiffness: 260, damping: 20 }}
              style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "22px", color: "var(--primary-light)" }}
            >
              ענה
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            style={{ fontSize: "17px", color: "var(--text-muted)", marginTop: "16px", opacity: 0.6 }}
          >
            הלולאה חוזרת עד שה-Agent מחליט שיש לו מספיק מידע לענות.
          </motion.p>
        </motion.div>
      </div>

      <SlideNav current={6} total={15} label="פתרון" />
    </div>
  );
}
