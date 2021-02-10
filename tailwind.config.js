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
       primaryText: '#E6E9F3',
       purpleText: '#6759AE',
       secondaryColor: '#64DBE5'
     },
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }