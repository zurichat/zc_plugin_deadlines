import { React, useContext } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useAllReminders } from '../../../api/reminders'
import { SearchContext } from '../../../context/searchContext/searchContext'
export const Searchbar = ({ ...props }) => {
	const { fetchedData } = useAllReminders()
	const [searchResult, setSearchResult] = useContext(SearchContext)

	const handleChange = (e) => {
		const filtered = fetchedData.filter((val) => {
			const regex = new RegExp(`${e.target.value}`, 'ig')
			return val.title.match(regex) || val.description.match(regex)
		})
		setSearchResult(filtered)
		if (searchResult && e.target.value === '') {
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
					onChange={(e) => handleChange(e)}
					id="task search"
				/>
			</label>
			<SearchIcon className="text-gray-400 w-3.5" />
		</div>
	)
}
