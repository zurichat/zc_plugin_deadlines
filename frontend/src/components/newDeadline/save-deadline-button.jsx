import React from 'react'

const SaveDeadlineButton = ({ ...props }) => {
	return (
		<button
			className=" bg-brand-primary text-white p-2 sm:py-2 sm:px-6 rounded-sm"
			{...props}
		>
			Save Deadline
		</button>
	)
}

export default SaveDeadlineButton
