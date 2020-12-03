module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-blockless',
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['apply', 'screen', 'font-face', 'nest'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'variants',
          'responsive',
          'apply',
          'screen',
        ],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-path'],
      },
    ],
    'selector-nested-pattern': '^&',
    'no-descending-specificity': null,
  },
}
