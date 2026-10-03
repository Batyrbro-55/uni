import type { Metadata } from "next";
import "./globals.css";
import "./atlas.css";
import "./planner.css";

export const metadata: Metadata = {
  title: "Admissions Atlas · Fall 2027",
  description: "University research, funding evidence, and application planning for Fall 2027.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

