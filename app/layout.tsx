import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agentic — מהסיוע לאוטונומיה",
  description: "הצגה טכנית על AI Agents: לולאת ReAct, כלים, זיכרון ומערכות מרובות-סוכנים.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="h-full">
      <body className="h-full overflow-hidden bg-[#060818]">{children}</body>
    </html>
  );
}
