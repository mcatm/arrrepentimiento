// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  ssr: true,
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  app: {
    head: {
      title: 'Arrrepentimiento',
      // titleTemplate: (titleChunk) => {
      //   return titleChunk && titleChunk !== 'Arrrepentimiento' ? `${titleChunk} - Arrrepentimiento` : 'Arrrepentimiento'
      // },
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "We build the modern folk songs by home-recording. The miscellaneous members give them special bodies by the experimental methods that ignore any contexts and add strange atmosphere. Between confusion and silence." },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;900&family=Ultra&display=swap' },
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js' },
      ],
    },
  },
  css: [
    '@/assets/scss/style.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
})
