import type { Config } from "tailwindcss";
import scrollBarHide from "tailwind-scrollbar-hide";

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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translate(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.1s ease-in-out forwards",
        fadeOut: "fadeOut 1.1s ease-in-out forwards",
        "slide-in-top": "slideInTop 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [scrollBarHide],
} satisfies Config;
