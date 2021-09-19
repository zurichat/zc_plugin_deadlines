import { React, useContext } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useAllReminders } from '../../../api/reminders'
import { SearchContext } from '../../../context/searchContext/searchContext'

// export const searchFunction = (searchTerm, fetchedData) => {
// 	console.log(typeof searchTerm, searchTerm)
// 	if (searchTerm !== '') {
// 		const result = fetchedData.filter((data) => {
// 			return (
// 				data.title.includes(searchTerm.toString().toLowerCase()) ||
// 				data.title.includes(searchTerm.toString().toUpperCase()) ||
// 				data.description.includes(searchTerm.toString().toLowerCase()) ||
// 				data.description.includes(searchTerm.toString().toUppercase()) ||
// 				data.assignee.includes(searchTerm.toString().toLowerCase()) ||
// 				data.assignee.includes(searchTerm.toString().toUpperCase()) ||
// 				data.title.includes(searchTerm.toString()) ||
// 				data.description.includes(searchTerm.toString()) ||
// 				data.assignee.includes(searchTerm.toString())
// 			)
// 		})

// 		return result
// 	}
// }

export const Searchbar = ({ ...props }) => {
	const { fetchedData, isPlaceholderData } = useAllReminders()
	// const [input, setInput] = useState('')
	const [searchResult, setSearchResult] = useContext(SearchContext)

	const handleChange = (e) => {
		// if (!isPlaceholderData && fetchedData && e.target.value !== '') {
		const filtered = fetchedData.filter((val) => {
			const regex = new RegExp(`${e.target.value}`, 'ig')
			console.log(e.target.value)
			return val.title.match(regex) || val.description.match(regex)
		})
		setSearchResult(filtered)
		console.log(filtered, 'searchbar.jsx')
		// console.log(searchResult)
		// }
		if (e.target.value === '') {
			setSearchResult(null)
		}
	}

	return (
		<div
			className="border rounded w-full py-2 px-5 inline-flex justify-between items-center focus-within:shadow-lg focus-within:ring-1 focus-within:ring-brand-primary"
			{...props}
		>
			<label htmlFor="task search" role="search">
				<input
					className="text-gray-400 leading-tight text-sm focus:text-black focus:outline-none mr-5"
					placeholder="Search"
					type="text"
					//value={input}
					onChange={(e) => handleChange(e)}
					id="task search"
				/>
			</label>
			<SearchIcon className="text-gray-400 w-3.5" />
		</div>
	)
}
