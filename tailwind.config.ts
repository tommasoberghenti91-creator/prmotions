import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        gold: "#D4AF37",
        goldSoft: "#E8CD7A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #B8912E 0%, #E8CD7A 50%, #B8912E 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
