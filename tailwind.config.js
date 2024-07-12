const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "max-xs": { max: "320px" },
      "max-sm": { max: "475px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "1024px" },
      "max-xl": { max: "1536px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
