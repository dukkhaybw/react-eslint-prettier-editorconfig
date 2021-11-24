module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'airbnb/hooks'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 13,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'import/extensions': [
			1,
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				json: 'never',
				js: 'never'
			}
		],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx', '.tsx', '.ts']
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.tsx', '.ts', '.js', '.json']
			}
		}
	}
};
