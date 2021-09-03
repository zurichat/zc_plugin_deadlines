module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#00B87C',
					secondary: '#1A61DB',
					accent: '#B8003C',
					text: {
						header: '#242424',
						body: '#3A3A3A',
						leftNav: '#999999',
						time: '#DADADA',
						lightIcon: '#BEBEBE',
						backdrop: '#808080',
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
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
