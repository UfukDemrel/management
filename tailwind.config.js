/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        "mainColor": '#0D1117',
        "columnColor": '#161C22'
      }
    },
  },
  plugins: [],
}

