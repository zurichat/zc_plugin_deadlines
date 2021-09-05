import React from 'react'

const AssigneeInput = () => {
	return (
		<form className="w-full max-w-sm">
			<label className="font-weight:700 text-align: left;">Assign to</label>
			<div className="flex items-center border-b border-black-500 py-2">
				<input
					className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					aria-label="Full name"
				/>
				<select></select>
			</div>
		</form>
	)
}

export default AssigneeInput
