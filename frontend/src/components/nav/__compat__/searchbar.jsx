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
			className="border rounded w-full py-2 px-5 inline-flex justify-between items-center focus-within:shadow-lg focus-within:ring-1 focus-within:ring-brand-primary"
			{...props}
		>
			<label htmlFor="task search" role="search">
				<input
					className="text-gray-400 leading-tight text-sm focus:text-black focus:outline-none"
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
