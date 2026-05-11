"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const timeline = [
  { year: "2022", event: "ChatGPT launches", desc: "AI talks. The world changes overnight." },
  { year: "2023", event: "Plugins + Code Interpreter", desc: "AI acts — sandboxed, limited, but real." },
  { year: "2024", event: "Claude Code · MCP · Cursor · Devin", desc: "AI builds. Full agent systems ship." },
  { year: "2025–26", event: "Agentic workflows mainstream", desc: "Every serious company now runs agents." },
];

const examples = [
  { name: "Cursor", desc: "Writes, tests, and fixes code autonomously", color: "#7c3aed" },
  { name: "Perplexity", desc: "Searches and synthesizes real-time web data", color: "#3b82f6" },
  { name: "Devin", desc: "Full engineering agent — plans, codes, deploys", color: "#06b6d4" },
  { name: "Copilot Workspace", desc: "Plans and implements features end-to-end", color: "#3fb950" },
  { name: "Claude Code", desc: "Multi-file agent: memory + tools + 1000+ MCPs", color: "#a78bfa" },
];

export default function Slide14Future() {
  return (
    <div className="slide" style={{ padding: 0 }}>
      {/* Photo strip */}
      <div style={{ height: "200px", position: "relative", flexShrink: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&auto=format&fit=crop&q=80"
          alt="Future AI"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,8,15,0.45) 0%, rgba(7,8,15,0.98) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 72px 20px" }}>
          <span className="section-label" style={{ borderBottomColor: "transparent", marginBottom: 0 }}>The Future</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ fontSize: "52px", fontWeight: 900, lineHeight: 1.0 }}
          >
            The Future is Already Here
          </motion.h2>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", padding: "28px 72px 70px" }}>
        {/* Timeline */}
        <div style={{ paddingRight: "48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.12 }}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                paddingTop: i > 0 ? "20px" : 0,
                paddingBottom: i < timeline.length - 1 ? "20px" : 0,
                borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span style={{ fontFamily: "'JetBrains Mono'", fontSize: "14px", fontWeight: 700, color: "var(--primary-light)", minWidth: "52px", paddingTop: "3px", opacity: 0.8 }}>{t.year}</span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "18px", color: "var(--text)" }}>{t.event}</div>
                <div style={{ fontSize: "17px", color: "var(--text-muted)", marginTop: "3px" }}>{t.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Examples */}
        <div style={{ paddingLeft: "48px", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.28 }}
            style={{ fontSize: "12px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.14em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "20px", opacity: 0.5 }}
          >
            Real agents shipping today
          </motion.p>
          {examples.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.32, delay: 0.36 + i * 0.1 }}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                paddingTop: i > 0 ? "16px" : 0,
                paddingBottom: i < examples.length - 1 ? "16px" : 0,
                borderBottom: i < examples.length - 1 ? "1px solid var(--border)" : "none",
                borderLeft: `3px solid ${e.color}`,
                paddingLeft: "16px",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: "17px", color: e.color, minWidth: "160px" }}>{e.name}</span>
              <span style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.4 }}>{e.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={14} total={15} label="FUTURE" />
    </div>
  );
}
