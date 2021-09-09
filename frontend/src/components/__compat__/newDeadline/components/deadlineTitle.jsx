import React, { useState } from 'react'

const DeadlineTitle = ({ title, ...props }) => {
	const [titleState, setTitleState] = useState('')
	return (
		<div className="m-5 my-5 text-lg">
			<label htmlFor="title" className="text-left font-bold">
				{title}
			</label>
			<br />
			<input
				className="border-b-2 border-gray-200 w-2/5 focus:outline-none focus:border-brand-primary"
				type="text"
				id="title"
				value={titleState}
				{...props}
				onChange={(e) => setTitleState(e.target.value)}
			/>
		</div>
	)
}

export default DeadlineTitle
