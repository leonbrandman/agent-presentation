"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const paths = [
  { level: "מתחיל", action: "התקן Claude Code. שוחח איתו. הבן את לולאת ReAct בפועל.", color: "#3fb950", cmd: "npm i -g @anthropic-ai/claude-code" },
  { level: "ביניים", action: "בנה Agent יחיד עם כלים. חבר שרת MCP אחד לשירות אמיתי.", color: "#3b82f6", cmd: "claude → /init → connect MCP → build" },
  { level: "מתקדם", action: "תכנן מערכת מרובה-Agents עם זיכרון, דעיכה ואחזור סמנטי.", color: "#7c3aed", cmd: "Orchestrator + Specialists + Pinecone + last_verified" },
];

export default function Slide15CTA() {
  return (
    <div className="slide" style={{ padding: 0 }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&auto=format&fit=crop&q=80"
          alt="Team building together"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,8,15,0.88) 0%, rgba(7,8,15,0.96) 100%)" }} />
      </div>

      <div className="relative z-10" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "44px 72px 70px" }}>
        <span className="section-label">סיכום</span>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
          <div>
            <motion.h2
              className="display"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: "88px", lineHeight: 0.95, marginBottom: "12px" }}
            >
              העתיד לא בדרך.
            </motion.h2>
            <motion.h2
              className="display"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: "88px", lineHeight: 0.95, color: "var(--primary-light)" }}
            >
              הוא כבר כאן.
            </motion.h2>
          </div>

          {/* 3 paths */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            style={{ borderRight: "2px solid var(--border)", paddingRight: "32px" }}
          >
            {paths.map((p, i) => (
              <motion.div
                key={p.level}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.55 + i * 0.12 }}
                style={{
                  paddingTop: i > 0 ? "22px" : 0,
                  paddingBottom: i < paths.length - 1 ? "22px" : 0,
                  borderBottom: i < paths.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "6px", flexDirection: "row-reverse", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "20px", color: "var(--text)", lineHeight: 1.4 }}>{p.action}</span>
                  <span style={{ fontFamily: "'Heebo'", fontWeight: 900, fontSize: "13px", letterSpacing: "0.1em", color: p.color, textTransform: "uppercase", minWidth: "70px", textAlign: "right" }}>{p.level}</span>
                </div>
                <code style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'", display: "block", opacity: 0.55, direction: "ltr", textAlign: "right" }}>{p.cmd}</code>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <p style={{ fontSize: "16px", color: "var(--text-muted)", fontStyle: "italic" }}>
            "ההבדל בין מודל ל-Agent הוא ההבדל בין <strong style={{ color: "var(--text)", fontStyle: "normal" }}>כלי</strong> ל<strong style={{ color: "var(--primary-light)", fontStyle: "normal" }}>שותף</strong>."
          </p>
          <div style={{ display: "flex", gap: "20px", flexShrink: 0, marginRight: "40px" }}>
            {["docs.anthropic.com/mcp", "github.com/anthropics/claude-code"].map((l) => (
              <span key={l} style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", color: "var(--text-muted)", opacity: 0.4, direction: "ltr" }}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <SlideNav current={15} total={15} label="סיכום" />
    </div>
  );
}
