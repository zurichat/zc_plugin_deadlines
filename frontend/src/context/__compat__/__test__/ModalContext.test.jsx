import React from 'react'
import { render, screen } from '@testing-library/react'
import { ModalContext } from '../ModalContext'
import '@testing-library/jest-dom'

test('ModalContextProvider renders props', () => {
	const providerProps = {
		modalShow: false,
		modalType: 'viewDeadline',
		viewDeadline: {
			title: 'Designing Zuri Dashboard',
			description:
				'This task will be a sprint, we are to use the design to implement a responsive dashboard',
			date: '2021-08-31',
			time: '5:00 PM',
		},
	}

	render(
		<ModalContext.Provider value={providerProps}>
			<ModalContext.Consumer>
				{(value) => (
					<div>
						<span>{value.viewDeadline.title}</span>
						<span>{value.viewDeadline.description}</span>
					</div>
				)}
			</ModalContext.Consumer>
		</ModalContext.Provider>
	)

	const title = screen.getByText('Designing Zuri Dashboard')
	const description = screen.getByText(
		'This task will be a sprint, we are to use the design to implement a responsive dashboard'
	)

	expect(title).toBeInTheDocument()
	expect(description).toBeInTheDocument()
})
