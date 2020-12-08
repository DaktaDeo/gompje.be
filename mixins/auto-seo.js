export default {
  head() {
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    const defaults = {
      url: 'https://gompje.be',
      title: 'Personal Site of Veerle Deschepper',
      site: 'Gompje.be',
      description:
        '🐦 ↦Learn. Write. Doodle. Code. Read. Geocache. 3D print. Lego. 🐱. Laravel. VueJS. Freelance. Life. -r  ↦Full Stack Web Application Development in Laravel + Vue.js @DaktaDeo  ↦Creator of Multipass -🦖',
      img: '/img/android-chrome-192x192.png',
      locale: 'nl_BE',
      twitter: '@iAmGompje',
      twitter_card: 'summary',
      themeColor: '#80A5A9',
    }
    const values = [
      {
        name: 'title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        name: 'description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        name: 'author',
        content: _.get(this, 'page.meta.social.author', defaults.author),
      },
      {
        name: 'apple-mobile-web-app-title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },

      // Facebook & LinkedIn
      {
        property: 'og:title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        property: 'og:site_name',
        content: _.get(this, 'page.meta.site', defaults.site),
      },
      {
        property: 'og:description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        property: 'og:type',
        content: _.get(this, 'page.meta.social.type', defaults.type),
      },
      {
        property: 'og:url',
        content: _.get(this, 'page.meta.social.url', defaults.url),
      },
      {
        property: 'og:image',
        content: _.get(this, 'page.meta.social.image', defaults.image),
      },
      {
        property: 'og:locale',
        content: _.get(this, 'page.meta.locale', defaults.locale),
      },

      // Twitter
      {
        name: 'twitter:card',
        content: _.get(
          this,
          'page.meta.social.twitter.card',
          defaults.twitter_card
        ),
      },
      {
        name: 'twitter:site',
        content: _.get(this, 'page.meta.social.site', defaults.site),
      },
      {
        name: 'twitter:creator',
        content: _.get(
          this,
          'page.meta.social.twitter.creator',
          defaults.twitter
        ),
      },
      {
        name: 'twitter:title',
        content: _.get(this, 'page.meta.title', defaults.title),
      },
      {
        name: 'twitter:description',
        content: _.get(this, 'page.meta.description', defaults.description),
      },
      {
        name: 'twitter:image',
        content: _.get(this, 'page.meta.social.image', defaults.image),
      },
    ]

    const names = _.map(
      _.filter(values, function (o) {
        return !_.isEmpty(o.content) && !_.isNil(o.name)
      }),
      (tag) => {
        return {
          hid: tag.name,
          name: tag.name,
          content: tag.content,
        }
      }
    )

    const properties = _.map(
      _.filter(values, function (o) {
        return !_.isEmpty(o.content) && !_.isNil(o.property)
      }),
      (tag) => {
        return {
          hid: tag.property,
          property: tag.property,
          content: tag.content,
        }
      }
    )

    return {
      title: values.title,
      meta: _.concat(names, properties),
    }
  },
}
