const createReactConfig = require('eslint-config-react-app')

module.exports = Object.assign({}, createReactConfig, {
  plugins: createReactConfig.plugins.concat(['prettier']),
  extends: ['airbnb-base', 'prettier'],
  rules: Object.assign({}, createReactConfig.rules, {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'no-unused-expressions': ['error', { allowTernary: true, allowTaggedTemplates: true }],
		'no-use-before-define': ['error', 'nofunc'],
		'react/prop-types': 0,
    'class-methods-use-this': 'off'
  })
})
