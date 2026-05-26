"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const types = [
  { icon: "🧠", name: "סמנטי", role: "מה ידוע", desc: "עובדות יציבות על המשתמש. מתמיד, משתנה לעתים רחוקות.", example: '"צמחוני. גר בתל אביב. שותה אספרסו, ללא סוכר."', color: "#7c3aed" },
  { icon: "⚙️", name: "פרוצדורלי", role: "מה עובד", desc: "התנהגויות ועדפות שנלמדו. איך ה-Agent אמור לפעול.", example: '"מקסימום 3 אפשרויות. ללא רשימות ארוכות. UI עברית, לוגיקה אנגלית."', color: "#3b82f6" },
  { icon: "📅", name: "אפיזודי", role: "מה קרה", desc: "אירועים עם חותמת זמן — יומן מפורט של אינטראקציות עבר.", example: '"15 אפר׳ — הוזמן מסעדה ביפו. 2 מאי — רעיונות לדייט."', color: "#06b6d4" },
  { icon: "💡", name: "רפלקטיבי", role: "אילו דפוסים עולים", desc: "תובנות מסונתזות שנוצרו מכל סוגי הזיכרון.", example: '"מעדיף מקומות שקטים בשישי. מקומות ערניים יותר בשבת."', color: "#3fb950" },
];

export default function Slide10Memory4() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">זיכרון</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "36px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            4 סוגי זיכרון של Agent
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            ללא זיכרון, Agent הוא <strong style={{ color: "var(--danger)" }}>כלי</strong>. עם זיכרון, הוא <strong style={{ color: "var(--primary-light)" }}>שותף</strong>.
          </motion.p>
        </div>

        {/* 2×2 — border separators, stagger diagonally */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
          {types.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.28 + i * 0.12 }}
              style={{
                borderRight: `3px solid ${t.color}`,
                paddingRight: "28px",
                paddingLeft: "48px",
                paddingTop: i >= 2 ? "32px" : 0,
                paddingBottom: i < 2 ? "32px" : 0,
                borderTop: i >= 2 ? "1px solid var(--border)" : "none",
                marginRight: i % 2 === 1 ? "40px" : 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", flexDirection: "row-reverse", justifyContent: "flex-end" }}>
                <span style={{ fontSize: "28px", lineHeight: 1 }}>{t.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Heebo'", fontWeight: 900, fontSize: "22px", color: t.color, lineHeight: 1 }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "3px" }}>{t.role}</div>
                </div>
              </div>
              <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "10px" }}>{t.desc}</p>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", fontStyle: "italic", opacity: 0.65 }}>{t.example}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={10} total={15} label="פתרון" />
    </div>
  );
}
