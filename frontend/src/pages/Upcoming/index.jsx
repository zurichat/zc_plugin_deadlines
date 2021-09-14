import React from 'react'
import { useAllReminders } from '../../api/reminders'

const UpcomingPage = () => {
	const { fetchedData } = useAllReminders()

	console.log(fetchedData)

	// Pass through sort hook
	// const sortedDeadlineStore = useSort(deadlineStore)

	// Can be passed through search hook

	// Then use this data to render

	return (
		<div>
			<div>Upcoming</div>
		</div>
	)
}

export default UpcomingPage
