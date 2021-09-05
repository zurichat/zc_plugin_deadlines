import React, { useState } from 'react'
import App from '../App'
import { render } from '@testing-library/react'
import { ModalContextProvider } from '../context/ModalContext'

test('<App /> renders without crashing', () => {
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
				<App />
			</ModalContextProvider>
		)
	}

	render(<MockComponent />)
})
