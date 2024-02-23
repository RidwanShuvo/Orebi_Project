/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'listColor': '#767676',
        'primaryColor': '#262626',
        'searchColor': '#C4C4C4',
        'borderColor': '#979797',
        'categoryColor': '#F5F5F3',
        'paragraphColor': '#6D6D6D',
        'placeColor': '#C4C4C4',
        'bannerColor': '#D8D8D8',
      },

      fontFamily: {
        'dm': ['DM Sans'],
      },
      fontSize: {
        'start': '39px',
      },

      maxWidth: {
        'container': '1400px',
      },
    },
  },
  plugins: [],
}

