const fontString = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap'
export default {
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kyle Larsen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',  content: 'width=device-width, initial-scale=1' },
      { property:"og:url",hid:'og:url', content:'https://www.klarsen.me/'},
      { property:"og:type",hid:'og:type', content:'website'},
      { property:"og:title", hid:'og:title', content:"I'm Kyle Larsen, I Create!"},
      { property:"og:description", hid:'og:description', content:"As a freelance developer I enjoy creating clean, fast, simple to use websites and web applications."},
      { property:"og:image", content:"/ogl.jpg"},
      { hid: 'description', name: 'description', content: 'Developer portfolio of Kyle Larsen' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: fontString },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules:['@nuxtjs/tailwindcss']
  ,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
