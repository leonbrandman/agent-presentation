"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const steps = [
  { type: "חשוב", cls: "badge-think", text: "צריך מחירים בזמן אמת + טווח תאריכים. אין לי את זה — חייב להשתמש בכלי." },
  { type: "פעל", cls: "badge-act", text: "get_date() → היום 11 מאי 2026. סוף שבוע הבא = 17–18 מאי." },
  { type: "פעל", cls: "badge-act", text: "search_flights(מוצא=TLV, יעד=BCN, תאריכים=17–18 מאי)" },
  { type: "תצפה", cls: "badge-observe", text: "3 תוצאות: ₪1,200 / ₪1,450 / ₪980 (Wizz Air, יציאה 06:40, שבת 17 מאי)" },
  { type: "חשוב", cls: "badge-think", text: "מספיק מידע. הזול ביותר הוא ₪980 ב-Wizz Air. מוכן לענות." },
  { type: "ענה", cls: "badge-answer", text: '"₪980 ב-Wizz Air, שבת 17 מאי, יציאה 06:40."' },
];

export default function Slide07Barcelona() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">ReAct בפעולה</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1.0, marginBottom: "16px" }}
          >
            דוגמת ברצלונה
          </motion.h2>

          {/* Terminal-style user query with blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "14px", borderRight: "2px solid var(--border)", paddingRight: "20px", flexDirection: "row-reverse" }}
          >
            <span style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'", letterSpacing: "0.1em", opacity: 0.5 }}>המשתמש שואל:</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0", direction: "rtl" }}>
              {/* Blinking terminal cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.65, repeat: Infinity, repeatType: "reverse" }}
                style={{ fontFamily: "'JetBrains Mono'", fontSize: "18px", color: "var(--primary)", marginLeft: "6px", lineHeight: 1 }}
              >
                ▋
              </motion.span>
              <span style={{ fontSize: "19px", color: "var(--text)", fontStyle: "italic" }}>"כמה עולה טיסה לברצלונה בסוף השבוע הקרוב?"</span>
            </span>
          </motion.div>
        </div>

        {/* Staggered steps */}
        <div style={{ borderRight: "2px solid var(--primary)", paddingRight: "28px" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.35 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                paddingTop: i > 0 ? "16px" : 0,
                paddingBottom: i < steps.length - 1 ? "16px" : 0,
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                flexDirection: "row-reverse",
              }}
            >
              <span className={`badge ${s.cls}`} style={{ flexShrink: 0, minWidth: "70px", justifyContent: "center", marginTop: "2px", fontSize: "11px" }}>
                {s.type}
              </span>
              <span style={{
                fontSize: "17px",
                color: s.type === "ענה" ? "var(--primary-light)" : "var(--text-muted)",
                lineHeight: 1.45,
                fontWeight: s.type === "ענה" ? 600 : 400,
                fontStyle: s.type === "ענה" ? "italic" : "normal",
                textAlign: "right",
              }}>
                {s.text}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.4 }}
          style={{ display: "flex", gap: "14px", alignItems: "flex-start", opacity: 0.65, flexDirection: "row-reverse" }}
        >
          <span style={{ fontSize: "15px" }}>⚠</span>
          <p style={{ fontSize: "17px", color: "var(--text-muted)", textAlign: "right" }}>
            <strong style={{ color: "var(--danger)" }}>מודל רגיל: </strong>
            <em>"אין לי גישה לנתוני טיסות בזמן אמת."</em> — נכון טכנית. חסר לחלוטין תועלת.
          </p>
        </motion.div>
      </div>

      <SlideNav current={7} total={15} label="פתרון" />
    </div>
  );
}
