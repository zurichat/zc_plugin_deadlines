module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	parser: 'babel-eslint',
	plugins: ['react', 'prettier'],
	extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'react/prop-types': 0,
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		indent: ['error', 2],
		'arrow-body-style': 'off',
		'prefer-const': ['error'],
		'no-var': ['error'],
		'no-new-object': ['error'],
		'object-shorthand': ['error'],
		'quote-props': ['error', 'as-needed'],
		'prefer-object-spread': ['error'],
		'array-callback-return': ['error'],
		'global-require': 0,
		'prefer-destructuring': [
			'error',
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'prefer-template': ['error'],
		'no-useless-escape': ['error'],
		'prefer-rest-params': ['error'],
		'no-new-func': ['error'],
		'no-param-reassign': ['error'],
		'prefer-spread': ['error'],
		'function-paren-newline': ['error'],
		'prefer-arrow-callback': ['error'],
		'implicit-arrow-linebreak': ['error'],
		'no-useless-constructor': ['error'],
		'no-unused-vars': ['warn'],
		eqeqeq: ['error'],
		semi: ['error', 'never'],
		'eol-last': 0,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			plugins: ['unused-imports'],
			extends: ['plugin:prettier/recommended'],
			rules: {
				'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				'jsx-a11y/anchor-is-valid': 'off',
				'react/require-default-props': 'off', // Allow non-defined react props as undefined
				'import/prefer-default-export': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'warn',
				'react/no-multi-comp': [1, { ignoreStateless: true }],
				'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
				'react/jsx-pascal-case': 1,
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
}
