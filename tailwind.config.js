/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        500: '#3b82f6',
        600: '#2563eb'
      },
      red: {
        600: '#dc2626'
      }
    }
  },
  plugins: [],
}