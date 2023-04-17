/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        costa:{
          300:"#D7D7E7",
          500:"#9C9CBF",
          600:"#6A6998"
        },
        cousseiro:{
          300:"#6C67BD",
          500:"#403AA5",
          600:"#2D2C6E"
        },
        cc:{
          300:"#343D59"
        }
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

