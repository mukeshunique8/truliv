/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'card': '0 0 10px rgba(0, 0, 0, 1)',
        'hhds': '0 0 15px  rgba(0, 0, 0, 0.20)',
      },
      backgroundColor:{
        navBg:"linear-gradient(180deg, #000 -4.84%, rgba(33, 33, 33, 0.00) 136.18%)",
      },
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
        dbtxt:"#110229",
        gtxt:"#8F90A6"
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
