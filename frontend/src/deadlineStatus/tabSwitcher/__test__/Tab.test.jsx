import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from '../Tab'

test('<Tab /> renders without crashing', () => {
	render(<Tab />)
})

test('<Tab /> renders correctly when selected', () => {
	const children = <p>Designing Zuris Dashboard</p>
	render(<Tab isSelected={true}>{children}</Tab>)
	const expectedContent = screen.getByText('Designing Zuris Dashboard')
	expect(expectedContent).toBeInTheDocument()
})
