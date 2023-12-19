/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainBlack': '#161A30',
        'mainSea': '#4FC3F6',
        'mainSeaShade': '#1960AD',
        'mainSeaShadeDarken': '#0E4F95',
      },
      fontFamily: {
        Gabarito: ['Gabarito'],
        Poppins: ['Poppins'],
        SpaceGrotesk: ['Space Grotesk'],
        BebasNeue: ['Bebas Neue']
      },
      gridTemplateColumns: {
        'myGrid': 'repeat(auto-fill, minmax(200px, 1fr));',
        'mobileGrid': 'repeat(auto-fill, minmax(100px, 1fr));',
        'editGrid': 'repeat(auto-fill, minmax(500px, 1fr));'
      },
    },
  },
  plugins: [],
}