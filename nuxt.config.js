import webpack from 'webpack'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // https://stackoverflow.com/questions/58205391/nuxtjs-use-asyncdata-method-in-layout-or-component
  fetchOnServer: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Gompje.be',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-optimized-images/
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/modules/tree/master/packages/browserconfig
    '@nuxtjs/browserconfig',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/nuxt-community/sitemap-module#dev
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  browserconfig: {
    TileColor: '#fff',
    square150x150logo: { '@': { src: 'icon.png' } },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
  },
  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'jpg', 'png'],
  },
  image: {
    sizes: [320, 420, 768, 1024, 1200],
    presets: [
      {
        name: 'avatar',
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50,
        },
      },
      {
        name: 'jpg-cover',
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 300,
          height: 300,
        },
      },
      {
        name: 'jpg-featured',
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 1200,
          height: 1200,
        },
      },
      {
        name: 'jpg-thumbnail',
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 80,
          height: 80,
        },
      },
    ],
  },
  sitemap: [
    {
      hostname: 'https://gompje.be',
      gzip: true,
      i18n: false,
    }
  ],
}
