/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1C3879',
        secondary: '#607EAA',
        third: '#EAE3D2',
        fourth: '#F9F5EB',
      },
    },
  },
  plugins: [],
}
