import React, { createContext, useState, useMemo, useContext } from 'react'

export const SortContext = createContext(null)

export const SortProvider = ({ children }) => {
	const [sort, setSort] = useState('')

	return (
		<SortContext.Provider value={{ sort, setSort }}>
			{children}
		</SortContext.Provider>
	)
}

export const useSort = (array) => {
	const { sort } = useContext(SortContext)

	const sortedArray = useMemo(() => {
		switch (sort) {
			case 'asc':
				return [...array].sort()
			case 'desc':
				return [...array].sort().reverse()
		}
	}, [array, sort])

	return sort ? sortedArray : array
}
