import React from 'react'
import { render } from '@testing-library/react'
import RemainingTime from '../components/date/RemainingTime'

test('<RemainingTime /> renders without crashing', () => {
	render(<RemainingTime />)
})
