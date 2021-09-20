import React from 'react'

const SaveDeadlineButton = ({ ...props }) => {
	return (
		<button
			className=" dtw-bg-brand-primary dtw-text-white dtw-p-2 sm:dtw-py-2 sm:dtw-px-6 dtw-rounded-sm"
			{...props}
		>
			Save Deadline
		</button>
	)
}

export default SaveDeadlineButton
