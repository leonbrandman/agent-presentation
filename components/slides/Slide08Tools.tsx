"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const tools = [
  { name: "חיפוש ברשת", what: "מושך מידע עדכני מהאינטרנט", example: '"מה שער NVDA עכשיו?"', color: "#7c3aed" },
  { name: "קריאה/כתיבה לקבצים", what: "ניגש ומשנה מסמכים בדיסק", example: '"סכם את קובץ ה-PDF בן 50 עמודים הזה"', color: "#3b82f6" },
  { name: "שליחת אימייל", what: "שולח הודעות בשמך", example: '"שלח את סיכום הפגישה לכל המשתתפים"', color: "#06b6d4" },
  { name: "הרצת קוד", what: "מריץ Python/JS לחישוב ואנליזה", example: '"נתח את ה-CSV הזה וצור גרף"', color: "#3fb950" },
  { name: "גישה ל-API", what: "מתחבר לכל שירות חיצוני", example: "Spotify, Google Calendar, מניות, Garmin", color: "#d29922" },
  { name: "מסד נתונים", what: "שומר מידע לצמיתות בין סשנים", example: '"זכור את ההחלטה הזו לשבוע הבא"', color: "#f85149" },
];

export default function Slide08Tools() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">הידיים</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            כלים
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            ללא כלים, Agent רק <strong style={{ color: "var(--danger)" }}>מדבר</strong>. עם כלים, הוא <strong style={{ color: "var(--success)" }}>פועל</strong>.
          </motion.p>
        </div>

        <motion.table
          className="pres-table"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28 }}
        >
          <thead>
            <tr>
              <th style={{ width: "22%" }}>כלי</th>
              <th style={{ width: "40%" }}>מה הוא עושה</th>
              <th>דוגמה</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t, i) => (
              <motion.tr
                key={t.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32, delay: 0.35 + i * 0.08 }}
              >
                <td>
                  <span style={{ fontFamily: "'Heebo'", fontWeight: 800, fontSize: "16px", color: t.color }}>{t.name}</span>
                </td>
                <td style={{ color: "var(--text-muted)", fontSize: "16px" }}>{t.what}</td>
                <td style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "15px" }}>{t.example}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      <SlideNav current={8} total={15} label="פתרון" />
    </div>
  );
}
