import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        def: "#383838",
        dark_grey: "#1F1F1F",
      },
      fontFamily: {
        title: ["Gloock", "sans-serif"],
      },
      backgroundImage: {
        navbar: "url('/images/noise.png')",
        "custom-radial-gradient":
          "radial-gradient(circle farthest-side at 50% 0, #f2f2f233, #0000)",
      },
      animation: {
        "bounce-color": "bounce-color 2.6s infinite",
        slideUp: "slideUp 1s ease-out forwards",
      },
      keyframes: {
        "bounce-color": {
          "0%, 100%": {
            transform: "translateY(10px)",
            fill: "#FFFFFF", // White when at the bottom
          },
          "50%": {
            transform: "translateY(-5px)",
            fill: "#6C6C6C", // Grey when at the top
          },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow")({
      shadowColor: "rgba(255, 255, 255, 255)",
      shadowBlur: "5px",
      shadowOffsetX: "1px",
      shadowOffsetY: "1px",
    }),
  ],
} satisfies Config;
