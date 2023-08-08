/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-fundo':'#14071c',
        'custom-fundo-claro':'#e6dcff',
      },
      backgroundImage: {
        'banner': "url('../../assets/Banner.jpg')",
      }
    },
  },
  plugins: [],
}

