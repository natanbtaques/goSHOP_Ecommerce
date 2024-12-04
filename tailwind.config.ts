/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        goSHOP_blue: "#131925",
        goSHOP_light: "#232F3E",
        goSHOP_yellow: "#249A26",
        lightText: "#ccc",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
