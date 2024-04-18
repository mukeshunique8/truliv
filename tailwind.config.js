/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        ptxt: "#E95F29",
        btxt: "#000000",
        wtxt: "#FFFFFF",
        stxt:"#FFF3EE",
      },
      backgroundColor:{
        pbg:"#E95F29",
        wbg:"#FFFFFF",
        sbg:"#FFF3EE",
      }
    },
  },
  plugins: [],
};
