import webpack from 'webpack'

const constructFeedItem = async (post, hostname, folder) => {
  const url = `${hostname}/${folder}/${post.slug}`
  return {
    author: post.authors,
    content: post.bodyHtml,
    date: new Date(post.createdAt),
    description: post.description,
    id: url,
    link: url,
    title: post.title,
  }
}
const addContentToFeed = async (feed, hostname, folder) => {
  const { $content } = require('@nuxt/content')
  const forEach = require('lodash/forEach')
  const articles = await $content(folder).fetch()
  forEach(articles, async (post) => {
    const feedItem = await constructFeedItem(post, hostname, folder)
    feed.addItem(feedItem)
  })
}

const createFeed = async (feed, args) => {
  const [ext] = args
  // const hostname = process.NODE_ENV === 'production' ? 'https://my-production-domain.com' : 'http://localhost:3000';
  const hostname = 'https://gompje.be'

  feed.options = {
    title: 'Gompje.be -- All Posts',
    description: 'Blog Stuff!',
    link: `${hostname}/feed.${ext}`,
  }

  await addContentToFeed(feed, hostname, 'articles')
  await addContentToFeed(feed, hostname, 'reviews')
  await addContentToFeed(feed, hostname, 'journal')

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
    // https://sebastianlandwehr.com/blog/creating-an-rss-feed-from-nuxt-content-with-full-body-html-code
    'nuxt-content-body-html',
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
      data: ['blog', 'xml'],
    },
  ],
  feedz: [
    {
      create: async (feed) => {
        const { $content } = require('@nuxt/content')
        feed.options = {
          title: "Gompje's articles",
          link: 'https://gompje.be/articles',
          description: '',
        }

        const posts = await $content('articles')
          .sortBy('createdAt', 'desc')
          .fetch()

        // eslint-disable-next-line lodash/prefer-lodash-method
        posts.forEach((post) => {
          const url = `https://gompje.be/articles/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        })
      },
      path: '/feed/articles',
      type: 'rss2',
    },
    {
      create: async (feed) => {
        const { $content } = require('@nuxt/content')
        feed.options = {
          title: "Gompje's articles",
          link: 'https://gompje.be/articles',
          description: '',
        }

        const posts = await $content('reviews')
          .sortBy('createdAt', 'desc')
          .fetch()

        // eslint-disable-next-line lodash/prefer-lodash-method
        posts.forEach((post) => {
          const url = `https://gompje.be/reviews/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        })
      },
      path: '/feed/reviews',
      type: 'rss2',
    },
    {
      create: async (feed) => {
        const { $content } = require('@nuxt/content')
        feed.options = {
          title: "Gompje's journal",
          link: 'https://gompje.be/journal',
          description: '',
        }

        const posts = await $content('journal')
          .sortBy('createdAt', 'desc')
          .fetch()

        // eslint-disable-next-line lodash/prefer-lodash-method
        posts.forEach((post) => {
          const url = `https://gompje.be/journal/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.bodyHtml,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        })
      },
      path: '/feed/journal',
      type: 'rss2',
    },
  ],
}
