import React from 'react'

const DeadlineTitle = () => {
	return (
		<div className="m-5 my-5 text-lg">
			<label htmlFor="title" className="text-left font-bold">
				Title
			</label>
			<input
				className="border-b-2 border-gray-200 w-2/5 focus:outline-none focus:border-brand-primary"
				type="text"
				id="title"
			/>
		</div>
	)
}

export default DeadlineTitle
