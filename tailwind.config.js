/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD',
        secondary: '#2ECC71',
        accent: '#E74C3C',
        neutral: '#ECF0F1',
        text: '#333333',
        highlight: '#F39C12'
      }
    },
  },
  plugins: [],
}