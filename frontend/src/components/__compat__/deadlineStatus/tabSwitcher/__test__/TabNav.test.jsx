import React from 'react'
import { render, screen } from '@testing-library/react'
import TabNav from '../TabNav'

test('<TabNav /> renders without crashing', () => {
	render(<TabNav />)
})

test('<TabNav /> renders all tabs', () => {
	const tabs = ['Overdue', 'Completed']
	render(<TabNav tabs={tabs} selected={tabs[0]} setSelected={null} />)
	const overdueTab = screen.getByText(tabs[0])
	const completedTab = screen.getByText(tabs[1])
	expect(overdueTab).toBeInTheDocument()
	expect(completedTab).toBeInTheDocument()
})
