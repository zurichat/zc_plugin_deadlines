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
			className="dtw-border dtw-rounded dtw-w-full dtw-py-2 dtw-px-5 dtw-inline-flex dtw-justify-between dtw-items-center focus-within:dtw-shadow-lg focus-within:dtw-ring-1 focus-within:dtw-ring-brand-primary"
			{...props}
		>
			<label htmlFor="task search" role="search">
				<input
					className="dtw-text-gray-400 dtw-leading-tight dtw-text-sm focus:dtw-text-black focus:dtw-outline-none dtw-mr-5"
					placeholder="Search"
					type="text"
					value={input}
					onChange={handleInput}
					id="task search"
					onKeyDown={handleEnterSubmit}
				/>
			</label>
			<SearchIcon
				className="dtw-text-gray-400 dtw-w-3.5"
				type="submit"
				onClick={handleSubmit}
			/>
		</div>
	)
}
export default Searchbar
