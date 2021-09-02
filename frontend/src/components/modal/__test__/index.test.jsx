import React from 'react'
import { render } from '@testing-library/react'

import Modal from '../'

test('<Modal /> renders without crashing', () => {
	render(<Modal />)
})
