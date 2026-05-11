"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

const items = [
  { delay: 0.1 },
  { delay: 0.22 },
  { delay: 0.32 },
  { delay: 0.42 },
  { delay: 0.52 },
];

const chips = ["Perceive", "Reason", "Act", "Learn"];

export default function Slide01Hook() {
  const [activeChip, setActiveChip] = useState(-1);

  useEffect(() => {
    const start = setTimeout(() => setActiveChip(0), 1800);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (activeChip < 0) return;
    const t = setTimeout(() => setActiveChip((p) => (p + 1) % chips.length), 1300);
    return () => clearTimeout(t);
  }, [activeChip]);

  return (
    <div className="slide items-start justify-end" style={{ padding: 0 }}>
      {/* Ken Burns photo */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <motion.div
          style={{ position: "absolute", inset: "-4%", width: "108%", height: "108%" }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&auto=format&fit=crop&q=80"
            alt="AI robot"
            fill
            style={{ objectFit: "cover", objectPosition: "55% center" }}
            priority
          />
        </motion.div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(7,8,15,0.97) 0%, rgba(7,8,15,0.85) 45%, rgba(7,8,15,0.25) 100%)"
        }} />
      </div>

      <div className="relative z-10" style={{ padding: "0 0 90px 72px", maxWidth: "680px" }}>
        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: items[0].delay }}
          style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", letterSpacing: "0.22em", color: "rgba(167,139,250,0.65)", marginBottom: "20px", textTransform: "uppercase" }}
        >
          Technical Presentation · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: items[1].delay }}
          className="display"
          style={{ fontSize: "128px", lineHeight: 0.88, color: "var(--text)", marginBottom: "24px" }}
        >
          AGENTIC<br />
          <span style={{ color: "var(--primary-light)" }}>AI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: items[2].delay, ease: "easeOut" }}
          style={{ width: "56px", height: "3px", background: "var(--primary)", marginBottom: "24px", transformOrigin: "left" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: items[3].delay }}
          style={{ fontSize: "19px", color: "rgba(238,242,247,0.6)", lineHeight: 1.6, marginBottom: "36px" }}
        >
          From Assistance to Autonomy.<br />From Tasks to Transformation.
        </motion.p>

        {/* Chips that loop — they demonstrate the agent cycle live */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: items[4].delay }}
          style={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          {chips.map((chip, i) => (
            <span key={chip} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                background: activeChip === i ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${activeChip === i ? "rgba(124,58,237,0.65)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: "2px", padding: "6px 14px", fontSize: "13px",
                color: activeChip === i ? "rgba(167,139,250,1)" : "rgba(238,242,247,0.65)",
                fontFamily: "'Space Grotesk'", fontWeight: activeChip === i ? 700 : 500,
                transition: "all 0.35s ease",
                boxShadow: activeChip === i ? "0 0 18px rgba(124,58,237,0.3)" : "none",
              }}>
                {chip}
              </span>
              {i < chips.length - 1 && (
                <span style={{
                  color: activeChip === i ? "rgba(124,58,237,0.9)" : "rgba(124,58,237,0.35)",
                  fontSize: "14px",
                  transition: "color 0.35s ease",
                }}>
                  →
                </span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      <SlideNav current={1} total={15} label="HOOK" />
    </div>
  );
}
