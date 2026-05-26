"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const services = ["Garmin", "Google Drive", "Notion", "GitHub", "Slack", "Figma", "Spotify"];
const before = [
  "אינטגרציה מותאמת אישית לכל שירות",
  "נשבר כשהמודל מתעדכן",
  "חודשי פיתוח לכל חיבור",
];
const after = [
  "תקן אחד — כל מודל, כל שירות",
  "מחבר פעם אחת. עובד בכל מקום.",
  "מעל 1,000 שרתי MCP זמינים כבר היום",
];

export default function Slide09MCP() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">MCP</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1.05, marginBottom: "10px" }}
          >
            תקן החיבור<br />האוניברסלי
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            Model Context Protocol — פורסם על ידי Anthropic ב-2024. חשוב עליו כ<strong style={{ color: "var(--text)" }}>USB ל-AI</strong>.
          </motion.p>
        </div>

        {/* Before / After */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--border)", paddingTop: "32px", gap: "0" }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ paddingLeft: "48px" }}
          >
            <p style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--danger)", marginBottom: "20px", opacity: 0.8 }}>✗ לפני MCP</p>
            {before.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.38 + i * 0.1 }}
                style={{ display: "flex", gap: "12px", marginBottom: "14px", flexDirection: "row-reverse" }}
              >
                <span style={{ color: "var(--danger)", opacity: 0.5, marginTop: "2px", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "18px", color: "var(--text-muted)", textAlign: "right" }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ paddingRight: "48px", borderRight: "1px solid var(--border)" }}
          >
            <p style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--success)", marginBottom: "20px", opacity: 0.8 }}>✓ עם MCP</p>
            {after.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.38 + i * 0.1 }}
                style={{ display: "flex", gap: "12px", marginBottom: "14px", flexDirection: "row-reverse" }}
              >
                <span style={{ color: "var(--success)", opacity: 0.6, marginTop: "2px", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "18px", color: "var(--text-muted)", textAlign: "right" }}>{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "28px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", direction: "ltr" }}
        >
          <span style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "17px", color: "var(--primary-light)" }}>ה-Agent שלך</span>
          <span style={{ color: "var(--border)", fontSize: "20px" }}>↔</span>
          <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "28px", color: "var(--cyan)", letterSpacing: "0.1em" }}>MCP</span>
          <span style={{ color: "var(--border)", fontSize: "20px" }}>↔</span>
          {services.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.78 + i * 0.07 }}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <span style={{ fontFamily: "'Heebo'", fontWeight: 600, fontSize: "16px", color: "var(--text-muted)" }}>{s}</span>
              {i < services.length - 1 && <span style={{ color: "var(--border)", opacity: 0.4 }}>·</span>}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <SlideNav current={9} total={15} label="פתרון" />
    </div>
  );
}
