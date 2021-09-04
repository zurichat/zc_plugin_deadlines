/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by spykelion
**/
import React from 'react'
import * as Icons from 'heroicons-react'

const CancelButton = ({ ...props }) => {
	return (
		<button {...props}>
			<Icons.XOutline className="bg-grey-500 text-white p-2 hover:bg-grey-600 rounded-full flex items-center justify-center w-15 h-15" />
		</button>
	)
}

export default CancelButton
