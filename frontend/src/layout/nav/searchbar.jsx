import { React, useState } from 'react'

import { SearchIcon } from '@heroicons/react/solid'

const Searchbar = ({ ...props }) => {
	const [input, setInput] = useState('')

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const handleEnterSubmit = (e) => {
		if (e.key === 'Enter') {
			handleSubmit(e)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setInput('')
	}

	return (
		<div
			className="appearance-none border rounded w-full py-2 px-5 inline-flex justify-between items-center"
			{...props}
		>
			<label htmlFor="task search" role="search">
				<input
					className="text-gray-400 leading-tight focus:outline-none focus:shadow-outline text-sm"
					placeholder="Search"
					type="text"
					value={input}
					onChange={handleInput}
					id="task search"
					onKeyDown={handleEnterSubmit}
				/>
			</label>
			<SearchIcon
				className="text-gray-400 w-3.5"
				type="submit"
				onClick={handleSubmit}
			/>
		</div>
	)
}
export default Searchbar
