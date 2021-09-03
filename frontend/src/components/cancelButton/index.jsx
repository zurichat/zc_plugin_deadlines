/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by spykelion
**/
import React from 'react'

const CancelButton = ({ ...props }) => {
	return (
		<button
			{...props}
			className="bg-red-500 text-white p-2 hover:bg-red-700 rounded"
		>
			Cancel{' '}
		</button>
	)
}

export default CancelButton
