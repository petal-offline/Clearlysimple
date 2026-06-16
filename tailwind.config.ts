import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080806",
        paper: "#f6f1e8",
        steel: "#cbd4d7",
        signal: "#a8dcff",
        cobalt: "#2457ff",
        ember: "#ff6b35",
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        border: "rgb(var(--border-rgb) / <alpha-value>)",
        input: "rgb(var(--input-rgb) / <alpha-value>)",
        ring: "rgb(var(--ring-rgb) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground-rgb) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground-rgb) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground-rgb) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive-rgb) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground-rgb) / <alpha-value>)"
        },
        muted: {
          foreground: "rgb(var(--muted-foreground-rgb) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        "hard-sm": "6px 6px 0 #080806",
        "hard-lg": "16px 16px 0 #080806"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(8,8,6,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,8,6,0.09) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
