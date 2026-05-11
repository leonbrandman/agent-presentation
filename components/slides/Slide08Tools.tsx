"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const tools = [
  { name: "Web Search", what: "Fetches real-time information from the internet", example: '"What\'s NVDA trading at right now?"', color: "#7c3aed" },
  { name: "File Read / Write", what: "Accesses and modifies documents on disk", example: '"Summarize this 50-page PDF"', color: "#3b82f6" },
  { name: "Send Email", what: "Sends messages on your behalf", example: '"Email the meeting notes to all participants"', color: "#06b6d4" },
  { name: "Run Code", what: "Executes Python/JS for computation and analysis", example: '"Analyze this CSV and generate a chart"', color: "#3fb950" },
  { name: "API Access", what: "Connects to any external service", example: "Spotify, Google Calendar, Stocks, Garmin", color: "#d29922" },
  { name: "Database", what: "Stores information permanently across sessions", example: '"Remember this decision for next week"', color: "#f85149" },
];

export default function Slide08Tools() {
  return (
    <div className="slide" style={{ justifyContent: "space-between" }}>
      <span className="section-label">The Hands</span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.0, marginBottom: "10px" }}
          >
            Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ fontSize: "18px", color: "var(--text-muted)" }}
          >
            Without tools, an agent only <strong style={{ color: "var(--danger)" }}>talks</strong>. With tools, it <strong style={{ color: "var(--success)" }}>acts</strong>.
          </motion.p>
        </div>

        <motion.table
          className="pres-table"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.28 }}
        >
          <thead>
            <tr>
              <th style={{ width: "18%" }}>Tool</th>
              <th style={{ width: "42%" }}>What it does</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((t, i) => (
              <motion.tr
                key={t.name}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32, delay: 0.35 + i * 0.08 }}
              >
                <td>
                  <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: "16px", color: t.color }}>{t.name}</span>
                </td>
                <td style={{ color: "var(--text-muted)", fontSize: "17px" }}>{t.what}</td>
                <td style={{ color: "var(--text-muted)", fontStyle: "italic", fontSize: "16px" }}>{t.example}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      <SlideNav current={8} total={15} label="SOLUTION" />
    </div>
  );
}
