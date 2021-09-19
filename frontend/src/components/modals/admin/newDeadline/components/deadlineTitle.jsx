import React, { useState } from 'react'

const DeadlineTitle = ({ title, ...props }) => {
	const [titleState, setTitleState] = useState('')
	return (
		<div className="dtw-m-5 dtw-my-5 dtw-text-lg">
			<label htmlFor="title" className="dtw-text-left dtw-font-bold">
				{title}
			</label>
			<br />
			<input
				className="dtw-border-b-2 dtw-border-gray-200 dtw-w-2/5 focus:dtw-outline-none focus:dtw-border-brand-primary"
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
