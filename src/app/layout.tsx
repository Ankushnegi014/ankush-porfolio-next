import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankush Negi | Full Stack Engineer",
  description:
    "Full Stack Engineer building real‑time dashboards, micro‑frontends, and high‑performance web apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
