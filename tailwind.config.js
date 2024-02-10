/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '310px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'pcScreen': '1700px',
    },

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
        parag: '1.2rem',
        paragMobile: '0.9rem',
        navFontSize: '1.3rem',
        contactSize: '1.4rem'
      },

      width: {
        projetsImg: '25rem',
        projetsImgMd: '20rem',
        educImg: '3rem'
      }

    },
  },
  plugins: [],
};
