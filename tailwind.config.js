/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './index.html', 
  ],
  theme: {
    extend: {
      colors: {
        'rojoOficial': '#8A2036', 
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}