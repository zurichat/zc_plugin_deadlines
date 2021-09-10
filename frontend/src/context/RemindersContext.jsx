import React, { createContext, useEffect, useReducer } from 'react'
import { useAllReminders } from '../api/reminders'

export const RemindersContext = createContext({ data: null })

const actionTypes = {
	SEARCH: 'SEARCH',
	INIT: 'INIT',
	SORT: 'SORT',
}

const remindersReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SEARCH:
			return { data: action.payload.data }

		case actionTypes.INIT:
			return { data: action.payload.data }

		case actionTypes.SORT:
			return { data: action.payload.data }

		default:
			return { data: state.data }
	}
}

export const RemindersContextProvider = ({ children }) => {
	const { fetchedData, isLoading, isError, isPlaceholderData } =
		useAllReminders()

	const [state, dispatch] = useReducer(remindersReducer, { data: null })

	useEffect(() => {
		// set the initial state with the newly fetched data
		dispatch({
			type: actionTypes.INIT,
			payload: { data: fetchedData.data.data },
		})
	}, [fetchedData.data.success])

	return (
		<RemindersContext.Provider
			value={{
				initialData: fetchedData.data.data,
				currentData: state.data,
				isLoading,
				isError,
				dispatch,
				isPlaceholderData,
				actionTypes,
			}}
		>
			{children}
		</RemindersContext.Provider>
	)
}
//
