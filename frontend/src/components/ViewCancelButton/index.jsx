/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by spykelion
**/
import React from 'react'

const CancelButton = ({ handleClick }) => {
	return (
		<>
			<div>
				<button
					onClick={handleClick}
					className="bg-red-500 text-white p-2 hover:bg-red-700 rounded"
				>
					Cancel{' '}
				</button>
			</div>
		</>
	)
}

export default CancelButton
