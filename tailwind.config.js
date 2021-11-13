const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Roboto', 'system-ui', 'sans-serif'],
      },
      height: {
        102: '28rem',
      },
      colors: {
        primary: 'var(--primary)',
        coolgray: colors.coolGray,
      },
      backgroundColor: {
        lightgray: 'var(--lightgray)',
        customgray: {
          300: 'var(--customgray-300)',
        },
      },
      ringColor: {
        primary: 'var(--primary)',
      },
      ringOffsetColor: {
        lightgray: 'var(--lightgray)',
        customgray: {
          300: 'var(--customgray-300)',
        },
      },
      borderColor: {
        primary: 'var(--primary)',
        lightgray: 'var(--lightgray)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      borderColor: ['focus'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
