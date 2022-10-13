// const { default: plugin } = require('tailwindcss');
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      transitionTimingFunction:{
        DEFAULT:'easy-in-out'
      },
      transformOrigin:{
        DEFAULT:'200ms'
      },
      spacing:{
        0.5:'0.12rem',
      },
      keyframes:{
        fadeIn:{
          from:{
            opacity:0,
          },
          to:{
            opacity:1
          }
        }
      },
      animation:{
        fade:'fadeIn .5s ease-in-out'
      },
      colors:{
        primary:'blue'
      },
      zIndex:{
        1:'1'
      }
    },
  },
  plugins: [ plugin(({addComponents,theme,addUtilities}) => {
    addComponents({
      '.btn-secondary':{
        backgroundColor:theme('colors.orange.500')
      }
    })
  })],

}
