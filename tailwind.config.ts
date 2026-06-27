import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#B68D40",
        cream: "#FFF8F0",
        ink: "#171717",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(23, 23, 23, 0.08)",
        glow: "0 18px 50px rgba(182, 141, 64, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
