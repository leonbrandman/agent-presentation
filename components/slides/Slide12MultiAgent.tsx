"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const agents = [
  { name: "Agent שיווק", sub: "קמפיינים ופנייה ללקוחות", color: "#3b82f6" },
  { name: "Agent פיננסים", sub: "כללי תקציב — ללא חריגים", color: "#3fb950" },
  { name: "Agent QA", sub: "מאמת לפני כל אספקה", color: "#d29922" },
];

const cards = [
  { icon: "🎯", title: "Agent יחיד", desc: "מטפל בהכל. פשוט. נכון ל-80% מהמקרים." },
  { icon: "👥", title: "מרובה-Agents", desc: "מומחה לכל דומיין. נכון כשהבידוד קריטי." },
  { icon: "⚖️", title: "מתי לפצל?", desc: "רק עם סיבה אמיתית. מורכבות היא תמיד עלות." },
];

export default function Slide12MultiAgent() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">מרובה-Agents</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            כשאחד לא מספיק
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            חלקו לפי דומיין. בדלו אחריות. מנעו טעויות דרך התמחות.
          </motion.p>
        </div>

        {/* Org chart — CEO appears first, agents branch in */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ borderRight: "2px solid var(--primary)", paddingRight: "28px" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "30px", color: "var(--primary-light)", letterSpacing: "0.04em", direction: "ltr", display: "inline-block" }}>CEO Agent (Orchestrator)</span>
            <span style={{ fontSize: "15px", color: "var(--text-muted)", marginRight: "20px", opacity: 0.6 }}>מקבל את כל הבקשות · מאציל · מסנתז תוצאות</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
            {agents.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.12 }}
                style={{ paddingLeft: "32px", paddingRight: i > 0 ? "32px" : 0, borderRight: i > 0 ? "1px solid var(--border)" : "none" }}
              >
                <div style={{ fontFamily: "'Heebo'", fontWeight: 900, fontSize: "19px", color: a.color, marginBottom: "6px" }}>{a.name}</div>
                <div style={{ fontSize: "16px", color: "var(--text-muted)" }}>{a.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.72 }}
          style={{ borderRight: "2px solid var(--border)", paddingRight: "28px" }}
        >
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            <strong style={{ color: "var(--text)", fontWeight: 700 }}>התמחות מונעת טעויות.</strong>{" "}
            Agent פיננסים אוכף כללים גם אם ה-Orchestrator שכח. ב-AI: כללים קשיחים לא ניתנים לעקיפה על ידי Agents רכים יותר.
          </p>
        </motion.div>

        {/* When to split */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid var(--border)", paddingTop: "28px", gap: "0" }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.84 + i * 0.1 }}
              style={{ paddingLeft: "32px", paddingRight: i > 0 ? "32px" : 0, borderRight: i > 0 ? "1px solid var(--border)" : "none" }}
            >
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>{c.icon}</div>
              <div style={{ fontFamily: "'Heebo'", fontWeight: 700, fontSize: "18px", marginBottom: "6px" }}>{c.title}</div>
              <div style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.5 }}>{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={12} total={15} label="פתרון" />
    </div>
  );
}
