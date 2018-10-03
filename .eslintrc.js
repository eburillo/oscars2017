const createReactConfig = require('eslint-config-react-app')

module.exports = Object.assign({}, createReactConfig, {
  plugins: createReactConfig.plugins.concat(['prettier']),
  extends: ['airbnb-base', 'prettier'],
  rules: Object.assign({}, createReactConfig.rules, {
    'prettier/prettier': 'error',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'no-unused-expressions': ['error', { allowTernary: true, allowTaggedTemplates: true }],
		'no-use-before-define': ['error', 'nofunc'],
		'react/prop-types': 0,
  })
})
