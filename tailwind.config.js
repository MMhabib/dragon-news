/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", serif', // Adds a new `font-display` class
      },
  },
  
},
plugins: [
  require('daisyui'),
],
}