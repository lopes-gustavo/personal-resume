/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 100%': { width: '0%' },
          '30%, 70%': { width: '100%' },
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
      },
      screens: {
        touch: { raw: 'only screen and (pointer: coarse)' },
      },
    },
  },
  plugins: [import('@tailwindcss/forms'), import('@tailwindcss/typography')],
};
