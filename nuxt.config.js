
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    //   { 'http-equiv': "Expires", content:"0" },
    //   { 'http-equiv': "pragma", content:"no-cache" },
    //   { 'http-equiv': "cache-control", content:"no-cache" },
    //   {'Content-Type': 'text/plain', "Cache-Control":"no-cache, no-store, must-revalidate"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
      'static/css/common.css',
    //   'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
      { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
      { src: '~/plugins/ga.js', mode: 'client' },
      { src: '~/plugins/element-ui.js', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/axios'
  ],
  axios: {
      proxy: true,
      prefix: 'https://www.hibifsqm.com/',
      credentials: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    babel: {
        "plugins": [
          [
            "component",
            {
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
            }
          ]
        ]
    }
    // vendor: ['element-ui']
  }
}
