"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const steps = [
  { n: 1, title: "בחר Runtime", desc: "Claude Code, LangGraph, CrewAI, AutoGen. מנהל את לולאת ה-ReAct בשבילך.", color: "#7c3aed" },
  { n: 2, title: "כתוב System Prompt חזק", desc: "ה-DNA של ה-Agent. מי הוא? אילו כללים? איך הוא מסווג בקשות?", color: "#3b82f6" },
  { n: 3, title: "חבר כלים דרך MCP", desc: "שרתי MCP לכל שירות שה-Agent צריך. התחל באחד. הוסף בהדרגה.", color: "#06b6d4" },
  { n: 4, title: "בנה זיכרון", desc: "התחל עם סמנטי + פרוצדורלי. הוסף אפיזודי + רפלקטיבי אחרי מספיק היסטוריה.", color: "#3fb950" },
  { n: 5, title: "הוסף מרובה-Agents (אם נחוץ)", desc: "רק כשדומיינים מצריכים בידוד קריטי. אל תסבך יתר על המידה.", color: "#d29922" },
  { n: 6, title: "הוסף דעיכה ואחזור", desc: "כל זיכרון מתיישן. תייג עם last_verified, הוסף חיפוש סמנטי, סמן רשומות ישנות.", color: "#f85149" },
];

export default function Slide13Build6() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">בנה מאפס</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1.05, marginBottom: "10px" }}>
            איך בונים Agent:<br />6 שלבים
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
                paddingLeft: i % 2 === 0 ? "48px" : 0,
                paddingRight: i % 2 === 1 ? "48px" : 0,
                borderTop: i >= 2 ? "1px solid var(--border)" : "none",
                borderRight: i % 2 === 1 ? "1px solid var(--border)" : "none",
                flexDirection: "row-reverse",
              }}
            >
              <span style={{
                fontFamily: "'Secular One', sans-serif", fontSize: "52px",
                color: s.color, lineHeight: 1, flexShrink: 0,
                opacity: 0.75, letterSpacing: "0.02em", marginTop: "-4px",
                direction: "ltr",
              }}>
                {s.n}
              </span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Heebo'", fontWeight: 800, fontSize: "18px", marginBottom: "6px", color: s.color }}>{s.title}</div>
                <div style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={13} total={15} label="פתרון" />
    </div>
  );
}
