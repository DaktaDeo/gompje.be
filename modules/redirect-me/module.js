const path = require('path')

const fs = require('fs-extra')

const { generateRedirects } = require('./generator')
const logger = require('./logger')
const { getStaticRoutes } = require('./routes')

module.exports = function module(moduleOptions) {
  const nuxtInstance = this

  // Init options
  // const options = await initOptions(nuxtInstance, moduleOptions)
  // if (options === false) {
  //   logger.info('Redirect disabled')
  //   return
  // }
  const options = []

  // Init cache
  // a file "redirect-routes.json" is written to "dist" dir on "build" mode
  const jsonStaticRoutesPath = !nuxtInstance.options.dev
    ? path.resolve(
        nuxtInstance.options.buildDir,
        path.join('dist', 'redirect-routes.json')
      )
    : null
  const staticRoutes = fs.readJsonSync(jsonStaticRoutesPath, { throws: false })
  const globalCache = { staticRoutes }

  // Init static routes
  nuxtInstance.extendRoutes((routes) => {
    // Create a cache for static routes
    globalCache.staticRoutes = getStaticRoutes(routes)

    // On run cmd "build"
    if (!nuxtInstance.options.dev) {
      // Save static routes
      fs.outputJsonSync(jsonStaticRoutesPath, globalCache.staticRoutes)
    }
  })

  // On "generate" mode, generate static files for each redirect or redirectindex
  nuxtInstance.nuxt.hook('generate:done', async () => {
    await nuxtInstance.nuxt.callHook(
      'redirect:generate:before',
      nuxtInstance,
      options
    )
    logger.info('Generating redirects')
    await Promise.all(
      // eslint-disable-next-line lodash/prefer-lodash-method
      options.map((options) =>
        generateRedirects(options, globalCache, nuxtInstance)
      )
    )
    await nuxtInstance.nuxt.callHook('redirect:generate:done', nuxtInstance)
  })
}
// async function initOptions(nuxtInstance, moduleOptions) {
//   if (nuxtInstance.options.redirect === false || moduleOptions === false) {
//     return false
//   }
//
//   let options = nuxtInstance.options.redirect || moduleOptions
//
//   // eslint-disable-next-line lodash/prefer-lodash-typecheck
//   if (typeof options === 'function') {
//     options = await options.call(nuxtInstance)
//   }
//
//   if (options === false) {
//     return false
//   }
//
//   // eslint-disable-next-line lodash/prefer-lodash-method
//   return Array.isArray(options) ? options : [options]
// }
