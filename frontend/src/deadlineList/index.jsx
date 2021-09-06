import React from 'react'
import ListCard from './components/listCard'

// Prop drilling, should be improved.

const DeadlineContainer = ({ reminderArray }) => {
	return (
		<div>
			{Array.isArray(reminderArray) &&
				reminderArray.map((value, index) => {
					const { title, description, dueDate, startDate } = value.payload
					return (
						<div className="w-full border-b-1/2 mt-5" key={index}>
							<ListCard
								title={title}
								description={description}
								dueDate={dueDate}
								startDate={startDate}
							/>
						</div>
					)
				})}
		</div>
	)
}

export default DeadlineContainer
