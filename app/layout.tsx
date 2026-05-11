import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic AI — From Assistance to Autonomy",
  description: "A technical presentation on AI Agents: ReAct loop, tools, memory, and multi-agent systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden bg-[#060818]">{children}</body>
    </html>
  );
}
