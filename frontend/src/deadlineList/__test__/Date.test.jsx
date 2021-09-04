import React from 'react'
import { render, screen } from '@testing-library/react'
import Date from '../components/date/Date'

test('<Date /> renders without crashing', () => {
	render(<Date />)
})

test('<Date /> renders appropriately', () => {
	const dateTopic = 'Due Date'
	const dateTime = '31st Aug, 2021'
	const imageAltText = 'calendar-icon'
	const props = {
		dateTopic,
		date: dateTime,
		icon: <img src={''} className="h-full" alt={imageAltText} />,
		iconColor: 'bg-brand-avatar-blue',
	}
	render(<Date {...props} />)
	expect(screen.getByText(dateTopic)).toBeInTheDocument()
	expect(screen.getByText(dateTime)).toBeInTheDocument()
	expect(
		screen.getByRole('img', { name: new RegExp(imageAltText, 'i') })
	).toBeInTheDocument()
})
