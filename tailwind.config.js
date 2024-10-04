/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#2E073F',
        'secondary':'#7A1CAC',
        'dark':'#0B192C',
        'light':'#EBD3F8',
        'oreng':'#FF6500',
        'janda':'#8C3061',
      },
      flex:{
        full:"0 0 100%"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/typography'),
  ],
}