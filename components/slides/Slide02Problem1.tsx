"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const pains = [
  { icon: "↺", label: "חסר זיכרון", desc: "מתחיל מאפס בכל שיחה מחדש" },
  { icon: "⏸", label: "פסיבי", desc: "ממתין לפרומפט — לא יוזם לעולם" },
  { icon: "⊘", label: "מבודד", desc: "לא יכול לגעת בקבצים או במערכות" },
  { icon: "✉", label: "מילים בלבד", desc: "לא שולח, לא שומר, לא מבצע" },
];

export default function Slide02Problem1() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label" style={{ color: "var(--danger)", borderBottomColor: "rgba(248,81,73,0.35)" }}>הבעיה</span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.05 }}
      >
        מודלי AI הם גאוניים.<br />
        <span style={{ color: "var(--danger)" }}>וחסרי תועלת.</span>
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", flex: 1, alignItems: "center", marginTop: "32px" }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          style={{ borderRight: "2px solid var(--danger)", paddingRight: "32px" }}
        >
          <p style={{ fontSize: "26px", lineHeight: 1.65, color: "var(--text-muted)", fontStyle: "italic" }}>
            "כל שיחה מתחילה מאפס.<br />
            ללא זיכרון. ללא פעולה. ללא יוזמה.<br />
            אתה מקבל <em style={{ color: "var(--text)", fontStyle: "normal", fontWeight: 600 }}>תשובות</em> — לא{" "}
            <em style={{ color: "var(--primary-light)", fontStyle: "normal", fontWeight: 600 }}>תוצאות</em>."
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
              <div style={{ fontFamily: "'Heebo'", fontWeight: 800, fontSize: "19px", marginBottom: "6px" }}>{p.label}</div>
              <div style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.5 }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={2} total={15} label="בעיה" />
    </div>
  );
}
