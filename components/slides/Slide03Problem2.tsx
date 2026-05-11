"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

function AnimatedCounter() {
  const [value, setValue] = useState(847392);
  useEffect(() => {
    const steps = [847392, 412841, 198234, 72049, 23881, 8420, 2193, 540, 91, 12, 3, 0];
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setValue(steps[i]);
      if (i >= steps.length - 1) clearInterval(timer);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "130px", lineHeight: 1, color: "var(--danger)", textShadow: "0 0 60px rgba(248,81,73,0.3)" }}
    >
      {value.toLocaleString()}
    </motion.div>
  );
}

export default function Slide03Problem2() {
  return (
    <div className="slide" style={{ padding: 0, flexDirection: "row" }}>
      <div style={{ width: "42%", position: "relative", flexShrink: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
          alt="Code on screen" fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(7,8,15,0) 0%, rgba(7,8,15,0.08) 60%, rgba(7,8,15,0.98) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(238,242,247,0.4)", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}
          >
            Memory retained<br />between conversations
          </motion.p>
          <AnimatedCounter />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", color: "rgba(238,242,247,0.3)", letterSpacing: "0.12em" }}
          >
            BYTES
          </motion.p>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 72px 70px 56px", gap: "32px" }}>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="section-label"
          style={{ color: "var(--danger)", borderBottomColor: "rgba(248,81,73,0.35)" }}
        >
          The Problem
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          style={{ fontSize: "48px", fontWeight: 900, lineHeight: 1.05 }}
        >
          GPT-4, Claude, Gemini.<br />
          <span style={{ color: "var(--danger)" }}>Same problem.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.6 }}
        >
          Brilliant in the moment. Gone the next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--danger)", marginBottom: "12px", opacity: 0.75 }}>✗ Regular LLM</p>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            Call a consultant. They answer. Call back tomorrow — <strong style={{ color: "var(--text)", fontWeight: 600 }}>they forgot everything.</strong> Start from zero. Every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.52 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--success)", marginBottom: "12px", opacity: 0.75 }}>✓ AI Agent</p>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            A personal assistant who remembers, follows up, and acts — <strong style={{ color: "var(--text)", fontWeight: 600 }}>within the rules you set.</strong>
          </p>
        </motion.div>
      </div>

      <SlideNav current={3} total={15} label="PROBLEM" />
    </div>
  );
}
