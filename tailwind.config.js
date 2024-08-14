/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '310px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      pcScreen: '1700px',
    },

    extend: {
      colors: {
        PrimaryText: {
          DEFAULT: '#E5484D',
        },

        //Couleurs principales
        primaryDark: {
          DEFAULT: 'rgb(255,255,255)',
        },
        secondaryDark: {
          DEFAULT: 'rgb(197,197,197)',
        },
        primary: {
          DEFAULT: '[#1e1e1e]',
        },
        secondary: {
          DEFAULT: 'rgb(197,197,197)',
        },

        interactiveColor: {
          DEFAULT: '#611623',
        },
        interactiveColorHover: {
          DEFAULT: '#3B1219',
        },
      },

      fontSize: {
        parag: '1.2rem',
        paragMobile: '0.9rem',
        navFontSize: '1.3rem',
        contactSize: '1.4rem',
      },

      width: {
        projetsImg: '25rem',
        projetsImgMd: '20rem',
        educImg: '3rem',
      },
    },
  },
  plugins: [],
}
