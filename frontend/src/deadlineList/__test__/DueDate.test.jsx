import React from 'react'
import { render } from '@testing-library/react'
import DueDate from '../components/date/DueDate'

test('<DueDate /> renders without crashing', () => {
	render(<DueDate />)
})
