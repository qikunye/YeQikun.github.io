/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000957',   // black
        secondary: '#FFEB00', // yellow
      },
    },
  },
  darkMode: 'class',
  plugins: [
    function({addUtilities,theme}){
      const newUtilities = {
        '.stroke-text': {
          '--tw-text-opacity': '1',
          '-webkit-text-stroke-width': '1.4px',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-text-stroke-color': theme('colors.secondary'),
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': theme('colors.primary')
        },
        '.text-stroke-secondary': {
          '-webkit-text-stroke-color': theme('colors.secondary')
        }
      };
      addUtilities(newUtilities, ['responsive', 'dark']);
      
      addUtilities(newUtilities,['responsive','dark']);
    }
  ],
}
