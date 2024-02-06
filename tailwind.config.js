/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // Dégradé de couleurs
        gradientPrimary: {
          DEFAULT: 'rgb(255,134,96)'
        },
        gradientSecondary: {
          DEFAULT: 'rgb(154,51,255)'
        },

        //Couleurs principales
        primary: {
          DEFAULT: 'rgb(255,255,255)'
        },
        secondary: {
          DEFAULT: 'rgb(197,197,197)'
        },

      },

      fontSize: {
        parag : '1.2rem',
      }
    },
  },
  plugins: [],
};
