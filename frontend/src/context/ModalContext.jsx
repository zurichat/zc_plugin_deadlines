import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})

export const ModalContextProvider = ({ children }) => {
	//modalTypes = "adminView", "adminEdit", "adminViewOther", "adminCreate", "userView"
	// modalData can be anything your modal needs to display

	const [modalData, setModalData] = useState({
		modalShow: false,
		modalType: 'adminView',
		modalData: {
			title: 'View Deadline',
		},
	})

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	)
}
