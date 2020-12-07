const path = require('path')

const { writeFileSync } = require('fs')

const { createRedirectNginxConfig } = require('./builder')
const { createRoutesCache } = require('./cache')
const logger = require('./logger')
const { excludeRoutes } = require('./routes')
const { setDefaultRedirectOptions } = require('./options')

/**
 * Generate a static file for each redirect or redirectindex
 *
 * @param {Object} options
 * @param {Object} globalCache
 * @param {Nuxt}   nuxtInstance
 * @param {number} depth
 */
async function generateRedirects(
  options,
  globalCache,
  nuxtInstance,
  depth = 0
) {
  /* istanbul ignore if */
  if (depth > 1) {
    // see https://webmasters.stackexchange.com/questions/18243/can-a-redirect-index-contain-other-redirect-indexes
    logger.warn(
      "A redirect index file can't list other redirect index files, but only redirect files"
    )
  }
  await generateRedirect(options, globalCache, nuxtInstance, depth)
}

/**
 * Generate a redirect file
 *
 * @param {Object} options
 * @param {Object} globalCache
 * @param {Nuxt}   nuxtInstance
 * @param {number} depth
 */
async function generateRedirect(options, globalCache, nuxtInstance, depth = 0) {
  // Init options
  options = setDefaultRedirectOptions(options, nuxtInstance, depth > 0)

  // Init cache
  const cache = {}
  cache.staticRoutes = () =>
    excludeRoutes(options.exclude, globalCache.staticRoutes)
  cache.routes = createRoutesCache(cache, options)

  // Generate redirect.xml
  const routes = await cache.routes.get('routes')
  const base = nuxtInstance.options.router.base
  const rules = createRedirectNginxConfig(options, routes, base)
  const filePath = path.join(nuxtInstance.options.generate.dir, options.path)

  logger.info('ok')
  logger.info(filePath)
  logger.info(rules)
  logger.info(render([...rules]))

  writeFileSync('test', render([...rules]))
  // fs.writeJson(filePath, json)
  //   .then(() => {
  //     logger.success(
  //       'Generated',
  //       getPathname(nuxtInstance.options.generate.dir, filePath)
  //     )
  //   })
  //   .catch((err) => {
  //     logger.error('Generating redirects error', err)
  //   })
}
function render(rules) {
  return (
    // eslint-disable-next-line lodash/prefer-lodash-method
    rules
      // eslint-disable-next-line lodash/prefer-lodash-method
      .map((rule) => `${rule.key}: ${String(rule.value).trim()}`)
      .join('\n')
  )
}

module.exports = { generateRedirects, generateRedirect }
