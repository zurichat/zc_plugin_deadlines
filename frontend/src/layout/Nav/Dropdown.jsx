import React from 'react'

const Dropdown = () => {
	return (
		<div>
			<select
				className="inline-flex justify-center w-full mx-7 rounded-md border border-gray-300 shadow-sm py-2 px-5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			></select>
		</div>
	)
}
export default Dropdown
