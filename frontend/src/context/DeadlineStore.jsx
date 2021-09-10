import React, { createContext, useState } from 'react'

export const DeadlineStore = createContext([])

export const DeadlineStoreProvider = ({ children }) => {
	const [deadlineStore, setDeadlineStore] = useState([])

	return (
		<DeadlineStore.Provider value={{ deadlineStore, setDeadlineStore }}>
			{children}
		</DeadlineStore.Provider>
	)
}
