// const glob = require('glob')
// const path = require('path')

// var getDynamicRoutes = function() {
//   return [].concat(
//     glob
//       .sync('*.json', { cwd: 'news/' })
//       .map((filepath) => `/news/${path.basename(filepath, '.json')}`),
//     glob
//       .sync('*.json', { cwd: 'blog/' })
//       .map((filepath) => `/blog/${path.basename(filepath, '.json')}`),
//     glob
//       .sync('*.json', { cwd: 'acara/' })
//       .map((filepath) => `/acara/${path.basename(filepath, '.json')}`),
//       glob
//       .sync('*.json', { cwd: 'artist/' })
//       .map((filepath) => `/artist/${path.basename(filepath, '.json')}`),      
//   )
// }

// var dynamicPaths = getDynamicRoutes()

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  target: 'server',

  // mode: 'universal',
  env: {
    authCookieName: 'srmbandsid'
    //    authCookieName: 'strapi_nuxt_auth_demo'
  },    
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
//  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s',
    title: process.env.npm_package_name || 'SRM Bookings And Services Official Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'description', name: 'description', content: 'Senang Rasanya Membantu' },
      { hid: 'og:description', name: 'og:description', content: 'Senang Rasanya Membantu' },
      { hid: 'og:title', name: 'og:title', content: 'SRM Bookings And Services Official Site' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'SRM Bookings And Services Official Site' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika:wght@400;700&display=swap' },
    ],
    script: [
      { type: 'text/javascript', src: 'https://kit.fontawesome.com/e7c4e5e5a4.js'},
    ]    
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~/plugins/vue-plyr',
      ssr: false
    },
    // { 
    //   src: '~plugins/ga.js', 
    //   mode: 'client' 
    // },
    { 
      src: '~plugins/filterDate.js'
    },    
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
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.cosmicjs.com/v3',
      }
    }
  },
  
  generate: {
  }, 
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config, ctx) {
    }
  }
}
