import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: "var(--color-neon-cyan)",
        neonMagenta: "var(--color-neon-magenta)",
        electricBlue: "var(--color-electric-blue)",
        deepPurple: "var(--color-deep-purple)",
        darkBg: "var(--color-dark-bg)",
        codeGreen: "var(--color-code-green)",
        warningOrange: "var(--color-warning-orange)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        space: ["Space Mono", "monospace"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
