const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const path = require('path')

const mergeRules = {
	plugins: 'replace',
	devServer: {
		static: {
			directory: 'replace',
		},
	},
	module: {
		rules: {
			test: 'match',
			include: 'replace',
			exclude: 'replace',
			use: 'replace',
		},
	},
}

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		orgName: 'zuri',
		projectName: 'zuri-plugin-deadlines',
		webpackConfigEnv,
		argv,
	})

	return mergeWithRules(mergeRules)(defaultConfig, {
		devServer: {
			historyApiFallback: true,
			// https: true,
		},
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: [
						require.resolve('css-loader', {
							paths: [require.resolve('webpack-config-single-spa')],
						}),
						'postcss-loader',
					],
				},
			],
		},
	})
}
