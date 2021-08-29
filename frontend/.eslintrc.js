export default {
	// Configuration for JavaScript files
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [],
	},
	overrides: [
		{
			files: ['**/*.js', '**/*.jsx'],
			plugins: ['unused-imports'],
			extends: ['plugin:prettier/recommended'],
			rules: {
				'prettier/prettier': [],
				'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				'jsx-a11y/anchor-is-valid': 'off',
				'react/require-default-props': 'off', // Allow non-defined react props as undefined
				'import/order': [
					'error',
					{
						groups: ['builtin', 'external', 'internal'],
						pathGroups: [
							{
								pattern: 'react',
								group: 'external',
								position: 'before',
							},
						],
						pathGroupsExcludedImportTypes: ['react'],
						'newlines-between': 'always',
						alphabetize: {
							order: 'asc',
							caseInsensitive: true,
						},
					},
				],
				'import/prefer-default-export': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
				'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

				'react/no-multi-comp': [true, { ignoreStateless: true }],
				'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
				'react/jsx-pascal-case': [
					1,
					{
						allowAllCaps: false,
						allowNamespace: false,
						allowLeadingUnderscore: false,
					},
				],
			},
		},
	],
}
