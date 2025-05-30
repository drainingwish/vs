import config from "./static";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khula: ["var(--font-khula)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        "custom-main": config.colors.main,
        "custom-secondary": config.colors.secondary,
        "custom-gray": "#161616",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      },
    },
  },
};
