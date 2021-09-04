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
			className="bg-grey-500 text-white p-2 hover:bg-grey-600 rounded-full flex items-center justify-center w-15 h-15"
		>
			X{' '}
		</button>
	)
}

export default CancelButton
