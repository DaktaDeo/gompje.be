module.exports = {
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    nightwind: {
      typography: true,
      fixedClass: 'nuxt-content-highlight', // default 'nightwind-prevent'
      fixedBlockClass: 'nuxt-content-highlight', // default 'nightwind-prevent-block'
      colors: {
        gray: {
          800: 600,
        },
      },
    },
  },
  plugins: [
    require('nightwind'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
