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

		case actionTypes.SEARCH_REMINDERS: {
			return {
				reminders: {
					...state.data,
					loading: false,
					isSearchActive: !!payload.length > 0 || false,
					foundReminders: state.data.filter((item) => {
						return (
							item.title.toLowerCase().search(payload.toLowerCase()) !== -1 ||
							item.description.toLowerCase().search(payload.toLowerCase()) !==
								-1
						)
					}),
					data: action.payload.data,
				},
			}
		}

		default:
			return { data: state.data }
	}
}

export const RemindersContextProvider = ({ children }) => {
	const { fetchedData, isLoading, isError, isPlaceholderData, status } =
		useAllReminders()

	const [state, dispatch] = useReducer(remindersReducer, { data: null })
	useEffect(() => {
		// set the initial state with the newly fetched data
		const data = fetchedData ? fetchedData.data.data : null
		dispatch({
			type: actionTypes.INIT,
			payload: { data },
		})
	}, [status])

	return (
		<RemindersContext.Provider
			value={{
				initialData: fetchedData ? fetchedData.data.data : null,
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
