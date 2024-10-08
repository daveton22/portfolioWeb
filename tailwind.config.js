/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoMono: ["Roboto Mono", "monospace"],
      quickSand: ["Quicksand", "sans-serif"],
    },
    extend: {
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
        primary: "#222831",
        secondary: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
