import React, { createContext, useState } from 'react'

export const ModalContext = createContext({})
export const ThemeContext = createContext()

export const UIContextProvider = ({ children }) => {
	const [modalData, setModalData] = useState({})

	const [theme, setTheme] = useState(true)

	return (
		<ModalContext.Provider value={[modalData, setModalData]}>
			<ThemeContext.Provider value={[theme, setTheme]}>
				{children}
			</ThemeContext.Provider>
		</ModalContext.Provider>
	)
}
