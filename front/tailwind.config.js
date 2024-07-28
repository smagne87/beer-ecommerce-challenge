/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FAFAFA',
        'custom-orange': '#FF9F24',
      },
    },
  },  plugins: [],
}
