// To be moved into general UI context object

import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})

export const ModalContextProvider = ({ children }) => {
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
		<ModalContext.Provider
			value={{
				modalData,
				setModalData,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
