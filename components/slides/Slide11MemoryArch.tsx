"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const layers = [
  { layer: "Context Window", analogy: "RAM — working memory", tech: "In the prompt", when: "Always — entire current session is loaded", color: "#7c3aed" },
  { layer: "Text Files", analogy: "Hard Drive — persistent storage", tech: "Markdown / JSON", when: "By file name, loaded on demand", color: "#3b82f6" },
  { layer: "Vector Database", analogy: "Semantic search engine", tech: "Pinecone / pgvector", when: "By meaning proximity to the current query", color: "#06b6d4" },
];

export default function Slide11MemoryArch() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">Memory Architecture</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "40px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "64px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            How Memory Works<br />Technically
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            Three layers. Each with a different retrieval mechanism.
          </motion.p>
        </div>

        {/* 3 layers — each slides from left */}
        <div>
          {layers.map((l, i) => (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.3 + i * 0.14 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1.2fr",
                gap: "32px",
                alignItems: "center",
                paddingTop: i > 0 ? "24px" : 0,
                paddingBottom: i < layers.length - 1 ? "24px" : 0,
                borderBottom: i < layers.length - 1 ? "1px solid var(--border)" : "none",
                borderLeft: `3px solid ${l.color}`,
                paddingLeft: "24px",
              }}
            >
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 900, fontSize: "20px", color: l.color }}>{l.layer}</div>
              <div style={{ fontSize: "18px", color: "var(--text-muted)" }}>{l.analogy}</div>
              <div>
                <code style={{ fontSize: "14px", color: "var(--cyan)", fontFamily: "'JetBrains Mono'" }}>{l.tech}</code>
              </div>
              <div style={{ fontSize: "15px", color: "var(--text-muted)" }}>{l.when}</div>
            </motion.div>
          ))}
        </div>

        {/* Smart filter + decay */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.7 }}
            style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "24px" }}
          >
            <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.65 }}>
              <strong style={{ color: "var(--primary-light)", fontWeight: 700 }}>Smart agents filter</strong> what goes to long-term memory.<br />
              <span style={{ opacity: 0.6 }}>"How much is a coffee?"</span> → skip.<br />
              <strong style={{ color: "var(--success)" }}>"I always drink espresso with no sugar"</strong> → save.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.82 }}
            style={{ borderLeft: "2px solid var(--warning)", paddingLeft: "24px" }}
          >
            <p style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "17px", marginBottom: "8px", color: "var(--warning)" }}>⏳ Temporal Decay</p>
            <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Every memory gets stale. Smart agents tag each entry with <code style={{ color: "var(--cyan)", fontSize: "13px" }}>last_verified</code> and <code style={{ color: "var(--cyan)", fontSize: "13px" }}>decay_risk</code>.
            </p>
          </motion.div>
        </div>
      </div>

      <SlideNav current={11} total={15} label="SOLUTION" />
    </div>
  );
}
