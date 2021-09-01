import React from 'react'
import App from '../App'
import { render, screen } from '@testing-library/react'

test('<App /> renders without crashing', () => {
	render(<App />)
})

test('link to zuri chat rendered', () => {
	render(<App />)
	const linkElement = screen.getByRole('link', { name: /zuri chat/i })
	expect(linkElement).toBeInTheDocument()
})
