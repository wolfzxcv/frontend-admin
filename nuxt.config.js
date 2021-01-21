import dotenv from 'dotenv'
import { i18nConfig } from './i18n'

// Loads `.env` file before import other configs
dotenv.config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    host: '0.0.0.0',
    port: 8000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/scss/fontawesome.scss',
    '@fortawesome/fontawesome-free/scss/brands.scss',
    '@fortawesome/fontawesome-free/scss/regular.scss',
    '@fortawesome/fontawesome-free/scss/solid.scss',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue-loading-overlay/dist/vue-loading.css',
    'bootstrap/scss/bootstrap.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/dayjs' }, { src: '~/plugins/i18n' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '~/modules/vue2-datepicker',
    '~/modules/vee-validate',
    '@nuxtjs/apollo',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Doc: https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  /*
   ** I18n module configuration
   */
  i18n: i18nConfig,

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URL,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
