/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Quicksand", "sans-serif"],
    },
    colors: {
      ...colors,
      gray: "#D0D3D7",
      "custom-blue": "#323EE2",
    },
  },
  plugins: [],
};
