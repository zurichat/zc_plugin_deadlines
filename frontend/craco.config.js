const path = require('path')
singleSpaApplicationPlugin = require('craco-plugin-single-spa-application')
const { when } = require('@craco/craco')

console.log(process.env.NODE_ENV)

module.exports = {
	plugins: when(process.env.NODE_ENV !== 'development', () => [
		{
			plugin: singleSpaApplicationPlugin,
			options: {
				orgName: 'zuri',
				projectName: 'zuri-plugin-deadlines',
				entry: 'src/single-spa-index.jsx',
				externals: ['react', 'react-dom'],
				minimize: true,
			},
		},
	]),

	devServer: {
		port: 8500,
		https: true,
	},
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
