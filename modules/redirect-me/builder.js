const { hostname } = require('os')
const { join } = require('path')
const { URL } = require('url')

const isHTTPS = require('is-https')

const logger = require('./logger')

/**
 * Initialize a fresh redirect instance
 *
 * @param   {Object}  options
 * @param   {Array}   routes
 * @param   {string}  base
 * @param   {Request} req
 * @returns {Redirect} redirect instance
 */
function createRedirectNginxConfig(options, routes, base = null, req = null) {
  const redirectConfig = {}

  // Set cacheTime
  redirectConfig.cacheTime = options.cacheTime || 0

  // Set redirect hostname
  redirectConfig.hostname = getHostname(options, req, base)

  // Set default values to each route
  // eslint-disable-next-line lodash/prefer-lodash-method
  routes = routes.map((route) => ({ ...options.defaults, ...route }))

  // Add a trailing slash to each route URL
  if (options.trailingSlash) {
    // eslint-disable-next-line lodash/prefer-lodash-method
    routes = routes.map((route) => {
      // eslint-disable-next-line lodash/prefer-lodash-method
      if (!route.url.endsWith('/')) {
        route.url = `${route.url}/`
      }
      return route
    })
  }

  // eslint-disable-next-line lodash/prefer-lodash-method
  routes = routes.map((route) => {
    // Omit the router data
    const { chunkName, component, name, path, ...redirectOptions } = route

    // Normalize to absolute path
    return {
      ...redirectOptions,
      url: join('.', String(redirectOptions.url)),
    }
  })

  // Set urls
  redirectConfig.urls = routes

  // Create redirect instance
  return redirectConfig
}

/**
 * Determine the current hostname
 *
 * @param   {Object}  options
 * @param   {Request} req
 * @param   {string}  base
 * @returns {string}
 */
function getHostname(options, req, base) {
  /* istanbul ignore if */
  if (!options.hostname && !req) {
    logger.fatal(
      'The `hostname` option is mandatory in your config on `spa` or `generate` build mode',
      options
    )
  }
  return new URL(
    base,
    options.hostname ||
      (req && `${isHTTPS(req) ? 'https' : 'http'}://${req.headers.host}`) ||
      `http://${hostname()}`
  ).href
}

module.exports = { createRedirectNginxConfig }
