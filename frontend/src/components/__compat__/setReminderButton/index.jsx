/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by spykelion
**/
import React from 'react'

const SetReminderButton = ({ ...props }) => {
	return (
		<button
			{...props}
			className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		>
			Set Deadline
		</button>
	)
}

export default SetReminderButton
