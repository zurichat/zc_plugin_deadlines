const path = require('path')
module.exports = {
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
