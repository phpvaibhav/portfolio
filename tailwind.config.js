/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': "linear-gradient(135deg, #eef2ff 0%, #fff7ed 100%)",
        'hero-dark': "linear-gradient(135deg, #0b1120 0%, #111827 100%)"
      }
    },
  },
  plugins: [],
}