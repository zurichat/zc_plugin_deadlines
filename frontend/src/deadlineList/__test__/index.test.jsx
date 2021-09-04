import React from 'react'
import { render } from '@testing-library/react'

import DeadlineList from '../'

test('<DeadlineList /> renders without crashing', () => {
	render(<DeadlineList />)
})
