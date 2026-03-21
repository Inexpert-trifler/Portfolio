import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0a0a",
        foreground: "#f5f7fb",
        primary: {
          DEFAULT: "#6ee7c8",
          foreground: "#04110d",
        },
        muted: {
          DEFAULT: "#95a6bf",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#6ee7c8",
          foreground: "#04110d",
        },
        secondary: {
          DEFAULT: "#101010",
          foreground: "#f5f7fb",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        accentSoft: "#102826",
        line: "#1f1f1f",
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.14)",
        ring: "rgba(110, 231, 200, 0.65)",
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        display: ["var(--font-heading)"],
      },
      boxShadow: {
        card: "0 20px 60px -24px rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
