const logger = require('./logger')

const DEFAULT_NUXT_PUBLIC_PATH = '/_nuxt/'

/**
 * Set default options for a redirect config
 *
 * @param   {Object}  options
 * @param   {Nuxt}    nuxtInstance
 * @param   {boolean} isLinkedToRedirectIndex
 * @returns {Object}
 */
function setDefaultRedirectOptions(
  options,
  nuxtInstance,
  isLinkedToRedirectIndex = false
) {
  const defaults = {
    path: 'redirects',
    hostname:
      // TODO: remove support of "build.publicPath" on release 3.0
      nuxtInstance.options.build.publicPath !== DEFAULT_NUXT_PUBLIC_PATH
        ? nuxtInstance.options.build.publicPath
        : undefined,
    exclude: [],
    routes: nuxtInstance.options.generate.routes || [],
    cacheTime: 1000 * 60 * 15,
    etag: nuxtInstance.options.render.etag,
    defaults: {},
  }

  const redirectOptions = {
    ...defaults,
    ...options,
  }

  /* istanbul ignore if */
  if (!redirectOptions.path) {
    logger.fatal(
      'The `path` option is either empty or missing in your config for a redirect',
      options
    )

    return redirectOptions
  }
}
module.exports = { setDefaultRedirectOptions }
