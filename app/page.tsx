"use client";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide01Hook from "@/components/slides/Slide01Hook";
import Slide02Problem1 from "@/components/slides/Slide02Problem1";
import Slide03Problem2 from "@/components/slides/Slide03Problem2";
import Slide04Insight from "@/components/slides/Slide04Insight";
import Slide05Formula from "@/components/slides/Slide05Formula";
import Slide06ReAct from "@/components/slides/Slide06ReAct";
import Slide07Barcelona from "@/components/slides/Slide07Barcelona";
import Slide08Tools from "@/components/slides/Slide08Tools";
import Slide09MCP from "@/components/slides/Slide09MCP";
import Slide10Memory4 from "@/components/slides/Slide10Memory4";
import Slide11MemoryArch from "@/components/slides/Slide11MemoryArch";
import Slide12MultiAgent from "@/components/slides/Slide12MultiAgent";
import Slide13Build6 from "@/components/slides/Slide13Build6";
import Slide14Future from "@/components/slides/Slide14Future";
import Slide15CTA from "@/components/slides/Slide15CTA";

const SLIDES = [
  Slide01Hook, Slide02Problem1, Slide03Problem2, Slide04Insight, Slide05Formula,
  Slide06ReAct, Slide07Barcelona, Slide08Tools, Slide09MCP, Slide10Memory4,
  Slide11MemoryArch, Slide12MultiAgent, Slide13Build6, Slide14Future, Slide15CTA,
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -16 : 16 }),
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => {
    setDir(1);
    setCurrent(c => Math.min(c + 1, SLIDES.length - 1));
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent(c => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = SLIDES[current];

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Click zones */}
        <div onClick={prev} style={{ position: "absolute", left: 0, top: 0, width: "15%", height: "100%", cursor: "w-resize", zIndex: 10 }} />
        <div onClick={next} style={{ position: "absolute", right: 0, top: 0, width: "15%", height: "100%", cursor: "e-resize", zIndex: 10 }} />

        {/* Progress bar */}
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "var(--border)", zIndex: 20 }}>
          <motion.div
            style={{ height: "100%", background: "linear-gradient(90deg, var(--primary), var(--cyan))" }}
            animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>

        {current === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            style={{
              position: "fixed", bottom: "64px", left: "50%", transform: "translateX(-50%)",
              fontSize: "11px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'",
              letterSpacing: "0.12em", zIndex: 20, opacity: 0.4,
            }}
          >
            ← → navigate &nbsp;·&nbsp; f fullscreen
          </motion.div>
        )}
      </div>
    </>
  );
}
