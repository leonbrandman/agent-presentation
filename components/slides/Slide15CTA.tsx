"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const paths = [
  { level: "Beginner", action: "Install Claude Code. Talk to it. Understand the ReAct loop firsthand.", color: "#3fb950", cmd: "npm i -g @anthropic-ai/claude-code" },
  { level: "Intermediate", action: "Build a single-agent with tools. Connect one MCP server to a real service.", color: "#3b82f6", cmd: "claude → /init → connect MCP → build" },
  { level: "Advanced", action: "Design a multi-agent system with memory, decay, and semantic retrieval.", color: "#7c3aed", cmd: "Orchestrator + Specialists + Pinecone + last_verified" },
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
        <span className="section-label">Conclusion</span>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "48px" }}>
          <div>
            <motion.h2
              className="display"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: "96px", lineHeight: 0.9, marginBottom: "12px" }}
            >
              The future isn't<br />coming.
            </motion.h2>
            <motion.h2
              className="display"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: "96px", lineHeight: 0.9, color: "var(--primary-light)" }}
            >
              It's already here.
            </motion.h2>
          </div>

          {/* 3 paths */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            style={{ borderLeft: "2px solid var(--border)", paddingLeft: "32px" }}
          >
            {paths.map((p, i) => (
              <motion.div
                key={p.level}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.55 + i * 0.12 }}
                style={{
                  paddingTop: i > 0 ? "22px" : 0,
                  paddingBottom: i < paths.length - 1 ? "22px" : 0,
                  borderBottom: i < paths.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "13px", letterSpacing: "0.18em", color: p.color, textTransform: "uppercase", minWidth: "110px" }}>{p.level}</span>
                  <span style={{ fontSize: "20px", color: "var(--text)", lineHeight: 1.4 }}>{p.action}</span>
                </div>
                <code style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'", marginLeft: "130px", display: "block", opacity: 0.55 }}>{p.cmd}</code>
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
            "The difference between a model and an agent is the difference between a <strong style={{ color: "var(--text)", fontStyle: "normal" }}>tool</strong> and a <strong style={{ color: "var(--primary-light)", fontStyle: "normal" }}>partner</strong>."
          </p>
          <div style={{ display: "flex", gap: "20px", flexShrink: 0, marginLeft: "40px" }}>
            {["docs.anthropic.com/mcp", "github.com/anthropics/claude-code"].map((l) => (
              <span key={l} style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", color: "var(--text-muted)", opacity: 0.4 }}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <SlideNav current={15} total={15} label="CONCLUSION" />
    </div>
  );
}
