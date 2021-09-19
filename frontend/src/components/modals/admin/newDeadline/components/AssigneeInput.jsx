import React from 'react'

const AssigneeInput = () => {
	return (
		<form className="dtw-w-full dtw-max-w-sm">
			<label className="dtw-font-bold dtw-text-left">Assign to</label>
			<div className="dtw-flex dtw-items-center dtw-border-b dtw-border-black-500 dtw-py-2">
				<input
					className="bg-transparent dtw-border-none dtw-w-full dtw-text-gray-700 dtw-mr-3 dtw-py-1 dtw-px-2 dtw-leading-tight dtw-focus:dtw-outline-none"
					type="text"
					aria-label="Full name"
				/>
				<select></select>
			</div>
		</form>
	)
}

export default AssigneeInput
