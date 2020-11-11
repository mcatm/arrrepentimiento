// import { getConfigForKeys, createClient } from './plugins/contentful'

// const ctfConfig = {
//   CTF_POST_TYPE_ID: process.env.CTF_POST_TYPE_ID,
//   CTF_SPACE_ID: process.env.CTF_SPACE_ID,
//   CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
// }

// const cdaClient = createClient(ctfConfig)

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_POST_TYPE_ID: process.env.CTF_POST_TYPE_ID
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Arrrepentimiento',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "We build the modern folk songs by home-recording. The miscellaneous members give them special bodies by the experimental methods that ignore any contexts and add strange atmosphere. Between confusion and silence." },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Ultra&display=swap' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/style.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: 'UA-104252-10'
    }],
  ],

  styleResources: {
    scss: [
      './assets/scss/variables.scss',
      './assets/scss/mixins.scss',
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.node = {
        fs: "empty" 
      }
    }
  },
}
