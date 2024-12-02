export default {
  head: {
    title: 'ecomers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/styles/main.css'],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  axios: {
    baseURL: '/' // Cambia a la URL de tu backend
  },
  build: {
    loaders: {
      ts: {
        silent: true
      },
      tsx: {
        silent: true
      }
    }
  },
  components: true // Habilitar importación automática de componentes
};

