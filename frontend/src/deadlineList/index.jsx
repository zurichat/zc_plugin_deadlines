import React from 'react'
import ListCard from './listCard'

const DeadlineContainer = ({ reminderArray }) => {
	//Logic to render card multiple times
	return (
		<div>
			{Array.isArray(reminderArray) &&
				reminderArray.map((value, index) => {
					const { title, description, expiryDate, startDate } = value.payload
					return (
						<div className="w-full border-b-1/2 mt-5" key={index}>
							<ListCard
								title={title}
								description={description}
								expiryDate={expiryDate}
								startDate={startDate}
							/>
						</div>
					)
				})}
		</div>
	)
}

export default DeadlineContainer
