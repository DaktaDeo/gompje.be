module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    _: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:lodash/recommended',
  ],
  plugins: ['prettier', 'lodash'],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
  },
  settings: {
    lodash: {
      pragma: '_',
    },
  },
}
