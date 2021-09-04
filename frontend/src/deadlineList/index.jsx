import React from 'react'

import DeadlineReminderCard from './components/DeadlineReminder/DeadlineReminderCard'

const DeadlineContainer = ({}) => {
	const n = 7

	//Logic to render card multiple times
	return (
		<div>
			{[...Array(n)].map((value, index) => (
				<div className="w-full border-b mt-5" key={index}>
					<DeadlineReminderCard />
				</div>
			))}
		</div>
	)
}

export default DeadlineContainer
