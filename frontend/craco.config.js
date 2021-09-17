const path = require('path')
singleSpaApplicationPlugin = require('craco-plugin-single-spa-application')

module.exports = {
	plugins: [
		{
			plugin: singleSpaApplicationPlugin,
			options: {
				orgName: 'zuri',
				projectName: 'plugin-deadlines',
				entry: 'src/single-spa-index.jsx',
				externals: ['react', 'react-dom'],
			},
		},
	],
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'@api': path.resolve(__dirname, './src/api'),
			'@deadlineStatus': path.resolve(__dirname, './src/deadlineStatus'),
			'@deadlineList': path.resolve(__dirname, './src/deadlineList'),
			'@components': path.resolve(__dirname, './src/components'),
			'@layout': path.resolve(__dirname, './src/layout'),
			'@assets': path.resolve(__dirname, './src/assets'),
		},
	},
}
