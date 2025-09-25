/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['Instrument Serif', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'framer-black': '#000000',
        'framer-white': '#ffffff',
        'framer-gray': '#666666',
      }
    },
  },
  plugins: [],
}
