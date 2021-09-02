import React from 'react'

const Dropdown = () => {
	return (
		<div>
			<select
				className="inline-flex justify-center w-half mx-7 rounded-md border border-gray-300 shadow-sm px-5 py-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				<option>Sort by: Date,time</option>
			</select>
		</div>
	)
}
export default Dropdown
