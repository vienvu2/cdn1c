module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true,
		es6: true,
		es5: true,
		jest: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended' ],
	plugins: [ 'react', 'react-hooks', 'jsx-a11y' ],
	rules: {
		strict: 0,
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
