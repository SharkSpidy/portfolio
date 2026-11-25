import type { Config } from "tailwindcss";

// Colors are CSS variables (see index.css) so one set of class names
// serves both the dark default and the light theme.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        "on-accent": token("on-accent"),
        hot: token("hot"),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      keyframes: {
        spinSlow: { to: { transform: "rotate(360deg)" } },
        blink: { "50%": { opacity: "0" } },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "spin-slow": "spinSlow 28s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
