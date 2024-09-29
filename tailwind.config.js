/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoMono: ["Roboto Mono", "monospace"],
      quickSand: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E84545",
        secondary: "#2B2E4A",
      },
      animation: {
        "rotate-slow": "rotate-slow 3s ease forwards",
        "rotate-medium": "rotate-medium 3s ease forwards",
        "rotate-fast": "rotate-fast 3s ease forwards",
      },
      keyframes: {
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(200deg)" },
        },
        "rotate-medium": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(220deg)" },
        },
        "rotate-fast": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(240deg)" },
        },
      },
      colors: {
        base: "#292a41",
      },
    },
  },
  plugins: [],
};
