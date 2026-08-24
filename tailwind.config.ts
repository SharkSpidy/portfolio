import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm near-black "ink" instead of a neutral/blue-black —
        // reads as paper-and-print, not "dashboard dark mode".
        ink: {
          DEFAULT: "#0d0c0a",
          soft: "#151310",
          line: "#2a2722",
        },
        paper: {
          DEFAULT: "#f3efe6",
          dim: "#a8a296",
        },
        // A single, punchy accent used sparingly — not a purple-to-cyan sweep.
        acid: {
          DEFAULT: "#ccff33",
          dim: "#8fb524",
        },
      },
      fontFamily: {
        // Serif display for headlines gives it an editorial, hand-set
        // feel that generic AI-tool sites never reach for.
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        // Subtle film-grain noise, not a radial glow.
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
} satisfies Config;
