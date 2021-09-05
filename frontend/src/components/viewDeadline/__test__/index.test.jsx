import React, { useState } from 'react'
import { render } from '@testing-library/react'

import { ModalContextProvider } from '../../../context/ModalContext'
import ViewDeadline from '../'

test('<ViewDeadline /> renders without crashing', () => {
	// Mock hook calls
	const MockComponent = () => {
		const [modalData, setModalData] = useState({
			modalShow: false,
			modalType: 'viewDeadline',
			viewDeadline: {
				title: 'Designing Zuri Dashboard',
				description:
					'This task will be a sprint, we are to use the design to implement a responsive dashboard',
				date: '2021-08-31',
				time: '5:00 PM',
			},
		})

		return (
			<ModalContextProvider value={{ modalData, setModalData }}>
				<ViewDeadline modalData={modalData} />
			</ModalContextProvider>
		)
	}
	render(<MockComponent />)
})
