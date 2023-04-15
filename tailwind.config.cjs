/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#1c1a1a",
        "flash-white": "#E9ECEF",
        onyx: "#343A40",
        grey: "#7F7D7D",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(90deg, rgba(52,58,64,1) 0%, rgba(130,140,150,1) 45%, rgba(233,236,239,1) 100%);",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      xl: "1px 14px 8px -4px rgba(0,0,0,0.75)",
      xxl: "   3px 3px 5px 0px rgba(145,141,141,0.75)",
      "2xl": " 0px -6px 79px 0px rgba(0,0,0,0.75)",
    },
  },
  plugins: [],
};
