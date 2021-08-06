export default function FixRss(moduleOptions) {
  // console.log(moduleOptions.token) // '123'
  const file = moduleOptions.fn
  // console.log(this.options.exampleMsg) // 'hello'

  this.nuxt.hook('generate:done', async nuxt => {
    console.log('Nuxt generate is ready!')
  })
}
