import webpack from 'webpack'

const fs = require('fs').promises
const path = require('path')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const constructFeedItem = async (post, hostname, folder) => {
  const rpl = require('lodash/replace')
  // note the path used here, we are using a dummy page with an empty layout in order to not send that data along with our other content
  const filePath = path.join(
    __dirname,
    `dist/${folder}/${post.slug}/index.html`
  )
  try {
    const dom = new JSDOM(await fs.readFile(filePath, 'utf8'))
    const raw = dom.window.document.getElementById('rssContent').innerHTML
    const url = `${hostname}/${folder}/${post.slug}`

    let content = rpl(raw, /_nuxt/g, `${hostname}/_nuxt`)
    content = rpl(content, /a href="\//g, `a href="${hostname}/`)
    content = rpl(content, /\/http/g, 'http')

    return {
      content,
      date: new Date(post.date),
      description: post.description,
      id: url,
      link: url,
      title: `${folder}: ${post.title}`,
    }
  } catch (e) {
    // forget it
    // console.log(e)
    return {}
  }
}

const createFeed = async (feed, args) => {
  const { $content } = require('@nuxt/content')
  const [folders, ext] = args

  const hostname =
    process.NODE_ENV === 'production'
      ? 'https://gompje.be'
      : 'http://localhost:3000'
  // const hostname = 'https://gompje.be'

  feed.options = {
    title: 'Gompje.be -- All Posts',
    description: 'Blog Stuff!',
    link: `${hostname}/feed.${ext}`,
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const folder of folders) {
    // const folder = 'journal'
    // eslint-disable-next-line no-await-in-loop
    const articles = await $content(folder)
      .where({ slug: { $ne: 'index' } })
      .fetch()

    // eslint-disable-next-line no-restricted-syntax
    for (const post of articles) {
      // eslint-disable-next-line no-await-in-loop
      const feedItem = await constructFeedItem(post, hostname, folder)
      feed.addItem(feedItem)
    }
  }
  return feed
}

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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        href: '/feed.xml',
        title: 'Gompje.be -- All Posts -- rss feed',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/lodash.js',
    '~plugins/markdown.js',
    '~plugins/filters.js',
    '~plugins/vue-scrollactive.js',
    '~/plugins/vue-agile',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-optimized-images/
    '@aceforth/nuxt-optimized-images',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-26421992-1',
      },
    ],
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
    '@nuxtjs/feed',
    ['~/modules/fixRss', { fn: 'feed.xml' }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  router: {
    prefetchPayloads: true,
    prefetchLinks: true,
    trailingSlash: undefined,
  },

  browserconfig: {
    TileColor: '#fff',
    square150x150logo: { '@': { src: 'apple-touch-icon.png' } },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
    transpile: ['vue-agile'],
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash',
      }),
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  optimizedImages: {
    optimizeImages: true,
    handleImages: ['jpeg', 'jpg', 'png'],
  },
  image: {
    sizes: [320, 420, 768, 1024, 1200],
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50,
        },
      },
      jpg_cover: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 320,
          height: 240,
        },
      },
      jpg_featured: {
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 1200,
          height: 1200,
        },
      },
      jpg_content: {
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 640,
          height: 640,
        },
      },
      jpg_thumbnail: {
        modifiers: {
          fit: 'inside',
          format: 'jpg',
          width: 80,
          height: 80,
        },
      },
    },
  },
  sitemap: [
    {
      hostname: 'https://gompje.be',
      gzip: true,
      i18n: false,
    },
  ],
  tailwindcss: {
    configPath: '@/tailwind.config.js',
    cssPath: '@/assets/css/tailwind.css',
    exposeConfig: false,
  },
  feed: [
    {
      path: '/feed.xml',
      create: createFeed,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: [['articles', 'reviews', 'journal'], 'xml'],
    },
  ],
  colorMode: {
    classSuffix: '',
  },
}
