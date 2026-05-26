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
      style={{ fontFamily: "'Secular One', sans-serif", fontSize: "120px", lineHeight: 1, color: "var(--danger)", textShadow: "0 0 60px rgba(248,81,73,0.3)", direction: "ltr" }}
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
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(270deg, rgba(7,8,15,0.98) 0%, rgba(7,8,15,0.08) 60%, rgba(7,8,15,0) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(238,242,247,0.4)", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}
          >
            זיכרון שנשמר<br />בין שיחות
          </motion.p>
          <AnimatedCounter />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
            style={{ fontFamily: "'Secular One', sans-serif", fontSize: "28px", color: "rgba(238,242,247,0.3)", letterSpacing: "0.12em", direction: "ltr" }}
          >
            BYTES
          </motion.p>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 56px 70px 72px", gap: "32px" }}>
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="section-label"
          style={{ color: "var(--danger)", borderBottomColor: "rgba(248,81,73,0.35)" }}
        >
          הבעיה
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          style={{ fontSize: "46px", fontWeight: 900, lineHeight: 1.05 }}
        >
          GPT-4, Claude, Gemini.<br />
          <span style={{ color: "var(--danger)" }}>אותה בעיה.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.6 }}
        >
          גאון ברגע. נעלם בשניה הבאה.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Heebo'", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--danger)", marginBottom: "12px", opacity: 0.75 }}>✗ LLM רגיל</p>
          <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            קוראים ליועץ. הוא עונה. קוראים מחר — <strong style={{ color: "var(--text)", fontWeight: 600 }}>שכח הכל.</strong> מתחילים מאפס. כל פעם.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.52 }}
          style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}
        >
          <p style={{ fontSize: "12px", fontFamily: "'Heebo'", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--success)", marginBottom: "12px", opacity: 0.75 }}>✓ AI Agent</p>
          <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.65 }}>
            עוזר אישי שזוכר, עוקב, ופועל — <strong style={{ color: "var(--text)", fontWeight: 600 }}>לפי הכללים שהגדרת.</strong>
          </p>
        </motion.div>
      </div>

      <SlideNav current={3} total={15} label="בעיה" />
    </div>
  );
}
