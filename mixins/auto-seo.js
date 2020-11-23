export default {
  head() {
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    const defaults = {
      url: 'https://daktadeo.be',
      title:
        'DaktaDeo. | 3D printing | Web Application Development in Laravel + Vue.js ',
      site: 'DaktaDeo.',
      description:
        '3D printing. Full Stack Web Application Development in Laravel + Vue.js',
      img: 'https://cdn.multipass.rocks/daktadeo/Logo_DaktaDeo.pngr',
      locale: 'nl_BE',
      twitter: '@daktadeo',
      twitter_card: 'Logo DaktaDeo',
      themeColor: '#80A5A9',
    }
    const values = [
      {
        name: 'title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        name: 'description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        name: 'author',
        content: _.get(this, 'post.meta.social.author', defaults.author),
      },
      {
        name: 'apple-mobile-web-app-title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },

      // Facebook & LinkedIn
      {
        property: 'og:title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        property: 'og:site_name',
        content: _.get(this, 'post.meta.site', defaults.site),
      },
      {
        property: 'og:description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        property: 'og:type',
        content: _.get(this, 'post.meta.social.type', defaults.type),
      },
      {
        property: 'og:url',
        content: _.get(this, 'post.meta.social.url', defaults.url),
      },
      {
        property: 'og:image',
        content: _.get(this, 'post.meta.social.image', defaults.image),
      },
      {
        property: 'og:locale',
        content: _.get(this, 'post.meta.locale', defaults.locale),
      },

      // Twitter
      {
        name: 'twitter:card',
        content: _.get(
          this,
          'post.meta.social.twitter.card',
          defaults.twitter_card
        ),
      },
      {
        name: 'twitter:site',
        content: _.get(this, 'post.meta.social.site', defaults.site),
      },
      {
        name: 'twitter:creator',
        content: _.get(
          this,
          'post.meta.social.twitter.creator',
          defaults.twitter
        ),
      },
      {
        name: 'twitter:title',
        content: _.get(this, 'post.meta.title', defaults.title),
      },
      {
        name: 'twitter:description',
        content: _.get(this, 'post.meta.description', defaults.description),
      },
      {
        name: 'twitter:image',
        content: _.get(this, 'post.meta.social.image', defaults.image),
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
    // return {
    //   title: this.post.meta.title,
    //   meta: [
    //     {
    //       hid: 'description',
    //       name: 'description',
    //       content: this.post.meta.description,
    //     },
    //     {
    //       hid: 'og:title',
    //       property: 'og:title',
    //       content: this.post.meta.title,
    //     },
    //     {
    //       hid: 'og:description',
    //       property: 'og:description',
    //       content: this.post.meta.description,
    //     },
    //     {
    //       hid: 'twitter:title',
    //       name: 'twitter:title',
    //       content: this.post.meta.title,
    //     },
    //     {
    //       hid: 'twitter:description',
    //       name: 'twitter:description',
    //       content: this.post.meta.description,
    //     },
    //   ],
    // }
  },
}
