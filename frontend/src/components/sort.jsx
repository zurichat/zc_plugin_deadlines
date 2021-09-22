import React, { createContext, useState } from 'react'

export const SortContext = createContext({})

export const SortContextProvider = ({ children }) => {
	const [sort, setSort] = useState(null)

	return (
		<SortContext.Provider value={{ sort, setSort }}>
			{children}
		</SortContext.Provider>
	)
}

// export const useSort = (array) => {
// 	const { sort } = useContext(SortContext)

// 	const sortedArray = useMemo(() => {
// 		switch (sort) {
// 			case 'asc':
// 				return [...array].sort()
// 			case 'desc':
// 				return [...array].sort().reverse()
// 		}
// 	}, [array, sort])

// 	return sort ? sortedArray : array
// }
