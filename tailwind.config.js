/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:{
          300:"#dddbff",
          400:"#cf84fc",
          500:"#2f27ce"

        },
        gray:{
          100:"#f6edf4",
          200:"#efdbea",
          300:"#e2bfd8"
        }
      }
    },
  },
  plugins: [],
}

