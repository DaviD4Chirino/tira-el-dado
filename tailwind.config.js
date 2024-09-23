import plugin from "tailwindcss";
/** @typedef {import('tailwindcss').Config} Config */

/** @type {Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        300: "#DEE2E6",
        400: "#CED4DA",
        DEFAULT: "#ADB5BD",
        600: "#495057",
        700: "#343A40",
        800: "#212529",
        900: "#131618",
      }
    },
    fontSize: {
      sm: "0.800rem",
      base: "1rem",
      xl: "1.250rem",
      "2xl": "1.563rem",
      "3xl": "1.954rem",
      "4xl": "2.442rem",
      "5xl": "3.053rem",
    },
    extend: {},
  },
  plugins: [],
};
