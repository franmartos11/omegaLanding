import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards", // Define la animación fadeIn
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 }, // Estado inicial
          "100%": { opacity: 1 }, // Estado final
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
