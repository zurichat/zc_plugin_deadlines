import React from 'react'
import { render } from '@testing-library/react'

import CancelButton from '..'

test('<CancelButton /> renders without crashing', () => {
	render(<CancelButton />)
})
