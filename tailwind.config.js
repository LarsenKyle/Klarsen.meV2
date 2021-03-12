module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     colors:{
       primaryColor: '#0E2021',
       grey: '#C4C8D4',
       primaryText: '#E6E9F3',
       purpleText: '#6759AE',
       secondaryColor: '#0F90D1',
       lighter: '#183739',
       pink: '#E0436B',
       yellow: '#F0C933',
       //Dark Matter
       dark: '#0b0011',
      deep: '#2b2031',
      base: '#32243d',
      mid: '#472360',
      light: '#705d97',
      lightest: '#a4add3'
     },
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }