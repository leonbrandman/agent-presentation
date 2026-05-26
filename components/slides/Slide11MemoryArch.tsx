"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const layers = [
  { layer: "חלון הקונטקסט", analogy: "RAM — זיכרון עבודה", tech: "In the prompt", when: "תמיד — כל הסשן הנוכחי נטען", color: "#7c3aed" },
  { layer: "קבצי טקסט", analogy: "דיסק קשיח — אחסון מתמיד", tech: "Markdown / JSON", when: "לפי שם קובץ, נטען לפי דרישה", color: "#3b82f6" },
  { layer: "מסד נתונים וקטורי", analogy: "מנוע חיפוש סמנטי", tech: "Pinecone / pgvector", when: "לפי קרבת משמעות לשאילתה הנוכחית", color: "#06b6d4" },
];

export default function Slide11MemoryArch() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">ארכיטקטורת זיכרון</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1.05, marginBottom: "10px" }}
          >
            איך זיכרון עובד<br />מבחינה טכנית
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            שלוש שכבות. לכל אחת מנגנון אחזור שונה.
          </motion.p>
        </div>

        {/* 3 layers — each slides from right (RTL) */}
        <div>
          {layers.map((l, i) => (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.3 + i * 0.14 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1.2fr",
                gap: "32px",
                alignItems: "center",
                paddingTop: i > 0 ? "24px" : 0,
                paddingBottom: i < layers.length - 1 ? "24px" : 0,
                borderBottom: i < layers.length - 1 ? "1px solid var(--border)" : "none",
                borderRight: `3px solid ${l.color}`,
                paddingRight: "24px",
              }}
            >
              <div style={{ fontFamily: "'Heebo'", fontWeight: 900, fontSize: "18px", color: l.color }}>{l.layer}</div>
              <div style={{ fontSize: "17px", color: "var(--text-muted)" }}>{l.analogy}</div>
              <div>
                <code style={{ fontSize: "13px", color: "var(--cyan)", fontFamily: "'JetBrains Mono'", direction: "ltr", display: "inline-block" }}>{l.tech}</code>
              </div>
              <div style={{ fontSize: "15px", color: "var(--text-muted)" }}>{l.when}</div>
            </motion.div>
          ))}
        </div>

        {/* Smart filter + decay */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.7 }}
            style={{ borderRight: "2px solid var(--primary)", paddingRight: "24px" }}
          >
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.65 }}>
              <strong style={{ color: "var(--primary-light)", fontWeight: 700 }}>Agents חכמים מסננים</strong> מה עובר לזיכרון ארוך טווח.<br />
              <span style={{ opacity: 0.6 }}>"כמה עולה קפה?"</span> → מדלג.<br />
              <strong style={{ color: "var(--success)" }}>"אני תמיד שותה אספרסו ללא סוכר"</strong> → שומר.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.82 }}
            style={{ borderRight: "2px solid var(--warning)", paddingRight: "24px" }}
          >
            <p style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "17px", marginBottom: "8px", color: "var(--warning)" }}>⏳ דעיכה זמנית</p>
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.6 }}>
              כל זיכרון מתיישן. Agents חכמים מתייגים כל רשומה עם <code style={{ color: "var(--cyan)", fontSize: "13px", direction: "ltr", display: "inline" }}>last_verified</code> ו-<code style={{ color: "var(--cyan)", fontSize: "13px", direction: "ltr", display: "inline" }}>decay_risk</code>.
            </p>
          </motion.div>
        </div>
      </div>

      <SlideNav current={11} total={15} label="פתרון" />
    </div>
  );
}
