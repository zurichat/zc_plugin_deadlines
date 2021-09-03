module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				cra: {
					primary: '#282c34',
				},
			},
			textColor: {
				cra: {
					link: '#61dafb',
					primary: '#282c34',
				},
			},
			fontFamily: {
				craFont: [
					'-apple - system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'sans - serif',
				],
			},
			width: {
				'1/7': '18.5857143%',
				'2/7': '28.5714286%',
				'3/7': '42.8571429%',
				'4/7': '57.1428571%',
				'5/7': '71.4285714%',
				'6/7': '85.7142857%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
