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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
