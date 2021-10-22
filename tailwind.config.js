const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const brandColors = {
  primary: {
    50: "#fefaf8",
    100: "#fcf4f1",
    200: "#f9e4dc",
    300: "#f5d3c7",
    400: "#edb39c",
    500: "#E59272",
    600: "#ce8367",
    700: "#ac6e56",
    800: "#895844",
    900: "#704838",
  },
  secondary: {
    50: "#fffbfa",
    100: "#fff8f5",
    200: "#ffede6",
    300: "#ffe2d6",
    400: "#ffccb8",
    500: "#FFB699",
    600: "#e6a48a",
    700: "#bf8973",
    800: "#996d5c",
    900: "#7d594b",
  },
  tertiary: {
    50: "#faf7f5",
    100: "#f5eeec",
    200: "#e6d5cf",
    300: "#d6bcb1",
    400: "#b88977",
    500: "#99573D",
    600: "#8a4e37",
    700: "#73412e",
    800: "#5c3425",
    900: "#4b2b1e",
  },
  accent: {
    50: "#f5faf9",
    100: "#eaf5f3",
    200: "#cbe6e1",
    300: "#abd6cf",
    400: "#6db8ab",
    500: "#2E9987",
    600: "#298a7a",
    700: "#237365",
    800: "#1c5c51",
    900: "#174b42",
  },
};

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Bitter", "Poppins", ...fontFamily.sans],
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: { ...brandColors },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
