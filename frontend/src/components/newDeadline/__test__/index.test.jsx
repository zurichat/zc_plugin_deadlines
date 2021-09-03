import React from 'react'
import { render } from '@testing-library/react'

import NewDeadline from '../'

test('<NewDeadline /> renders without crashing', () => {
	render(<NewDeadline />)
})
