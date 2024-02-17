/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#004040',
          200: '#002D2D',
        },
        hover: '#E0EEC6',
        bg: '#F1F7ED',
        placeholder: '#5C7A89',
        buttons: '#D9D9D9',
      }
    },
  },
  plugins: [],
}
