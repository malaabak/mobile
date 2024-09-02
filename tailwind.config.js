const colors = require("./resources/colors/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/presentation/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ["bg-blue-200", "bg-green-100", "text-blue-700", "border-blue-700"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
