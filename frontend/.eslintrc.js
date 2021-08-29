module.exports = {
	// Configuration for JavaScript files
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 1,
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			plugins: ['unused-imports'],
			extends: ['plugin:prettier/recommended'],
			rules: {
				'prettier/prettier': 1,
				'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				'jsx-a11y/anchor-is-valid': 'off',
				'react/require-default-props': 'off', // Allow non-defined react props as undefined
				'import/prefer-default-export': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
				'react/no-multi-comp': [1, { ignoreStateless: true }],
				'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
				'react/jsx-pascal-case': [
					1,
					// {
					// 	allowAllCaps: false,
					// 	allowNamespace: false,
					// 	allowLeadingUnderscore: false
					// },
				],
			},
		},
	],
}
