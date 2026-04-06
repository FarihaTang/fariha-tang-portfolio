import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Clash Display"', '"Plus Jakarta Sans"', "sans-serif"],
        mono:    ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        bg:       "#f8f7f4",
        ink:      "#0f0f0f",
        "ink-2":  "#1a1a2e",
        muted:    "#6b7280",
        subtle:   "#9ca3af",
        "indigo": "#5b50f0",
        "violet": "#7c3aed",
        "rose":   "#f43f5e",
        "amber":  "#f59e0b",
        "emerald":"#10b981",
        "sky":    "#0ea5e9",
      },
      keyframes: {
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":  "fade-in 0.5s ease forwards",
        marquee:    "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
