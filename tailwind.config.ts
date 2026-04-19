import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: "#070712",
          900: "#0a1020",
          800: "#0f1730",
          700: "#132245"
        },
        dul: {
          300: "#8be9ff",
          400: "#56d6ff",
          500: "#17b6ff"
        },
        void: {
          400: "#7a5cff",
          500: "#643dff",
          700: "#31148f"
        }
      },
      boxShadow: {
        glass: "0 8px 48px rgba(20, 24, 58, 0.35)",
        neon: "0 0 40px rgba(86, 214, 255, 0.20)"
      },
      backgroundImage: {
        "cosmic-grid":
          "radial-gradient(circle at 20% 20%, rgba(86,214,255,0.22), transparent 35%), radial-gradient(circle at 80% 0%, rgba(100,61,255,0.16), transparent 40%), linear-gradient(180deg, rgba(5,8,17,0.92), rgba(8,10,22,1))"
      }
    }
  },
  plugins: []
};

export default config;
