/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "bg1":"hsl(180, 52%, 96%)",
        "bg2":"hsl(180, 31%, 95%)",
        "bg3":"#5D9F9D",
        "bg4":"hsl(180, 14%, 20%)",
        "pimary":"#5D9F9D",
        "secondary":"#5DA5A3"
      },
      backgroundImage:{
        'bg_1': "url('../src/assets/bg-header-desktop.svg')",
        'bg_2': "url('../src/assets/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}

