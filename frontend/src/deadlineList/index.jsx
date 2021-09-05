import React from 'react'
import ListCard from './listCard'

const DeadlineContainer = ({ reminderArray }) => {
	//Logic to render card multiple times

	return (
		<div>
			{reminderArray
				? reminderArray.map((value, index) => (
						<div className="w-full border-b-1/2 mt-5" key={index}>
							<ListCard />
						</div>
				  ))
				: null}
		</div>
	)
}

export default DeadlineContainer
