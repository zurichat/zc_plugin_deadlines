const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: '425px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				brand: {
					primary: '#00B87C',
					secondary: '#1A61DB',
					accent: '#B8003C',
					border: '#DADADA',
					text: {
						header: '#242424',
						body: '#3A3A3A',
						leftNav: '#999999',
						time: '#DADADA',
						lightIcon: '#BEBEBE',
						backdrop: '#808080',
						listTitle: '#000000',
						overdue: '#AB0655',
					},
					error: '#F40101',
					bg: {
						lightGrey: '#F6F6F6',
						white: '#FFFFFF',
					},
					success: '#008B5E',
					avatar: {
						pink: '#F7E0FF',
						yellow: '#F8FFCD',
						red: '#FFF0F0',
						green: '#ACFFE6',
						blue: '#E3EEFF',
					},
					priority: {
						low: '#FFEB3B',
						medium: '#FF9800',
						high: '#F44336',
					},
					svg: {
						blue: '#EAF2FD',
						green: '#0499491A',
					},
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
				'card-w': '65.45961002785515%',
			},
			minWidth: {
				priority: '0.5rem',
			},
			height: {
				'screen/1.5': '75vh',
				'screen/2': '50vh',
				'screen/3': 'calc(100vh / 3)',
				'screen/4': 'calc(100vh / 4)',
				'screen/5': 'calc(100vh / 5)',
				'card-full': '11.438rem',
			},
			minHeight: {
				'card-full': '11.438rem',
			},
			borderWidth: {
				'1/2': '0.5px',
			},
			zIndex: {
				'-10': '-10',
				'-20': '20',
			},
			borderRadius: {
				'1/2': '50%',
				'4xl': '1.875rem',
			},
			translate: {
				'-3/2': '-150%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
