import type { Metadata } from "next";
import "./globals.css";

import { Orbitron, Space_Mono, JetBrains_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-orbitron",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Rahul Gupta | AI Systems Engineer",
  description:
    "AI Systems Engineer specializing in production-ready agentic AI systems, autonomous LLM agents, computer vision pipelines, and full-stack AI applications. Graduating May 2025.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "LLM",
    "Computer Vision",
    "Autonomous Agents",
    "Full Stack AI",
  ],
  authors: [{ name: "Rahul Gupta" }],
  openGraph: {
    title: "Rahul Gupta | AI Systems Engineer",
    description: "Building autonomous LLM agents and production-ready AI systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${spaceMono.variable} ${jetbrains.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
