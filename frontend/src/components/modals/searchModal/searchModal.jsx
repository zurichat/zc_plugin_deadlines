import React, { useContext } from 'react'
import DeadlineCard from '../../deadlineCard/index'
import { SearchContext } from '../../../context/searchContext/searchContext'

const SearchModal = () => {
	const searchResult = useContext(SearchContext)
	console.log(searchResult[0], 'searchModal')
	// const response = searchResult[0]
	return (
		<>
			<DeadlineCard searchResult={searchResult[0]} />
		</>
	)
}

export default SearchModal
