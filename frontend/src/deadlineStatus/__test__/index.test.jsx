import React from 'react'
import { render } from '@testing-library/react'

import DeadlineStatus from '../'

test('<DeadlineStatus /> renders without crashing', () => {
	render(<DeadlineStatus />)
})
