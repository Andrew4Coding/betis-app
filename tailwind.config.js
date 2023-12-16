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
      },
      backgroundImage: {
        'sea-texture': "url('./components/Sea.png')",
        'seaIso': "url('../../assets/plane.svg')"
      },
      boxShadow: {
        'boldShadow': '10px 11px 0px 0px rgba(0,0,0,0.75);-webkit-box-shadow: 10px 11px 0px 0px rgba(0,0,0,0.75);-moz-box-shadow: 10px 11px 0px 0px rgba(0,0,0,0.75);'
      }
    },
  },
  plugins: [],
}