import React from 'react'
import { useAllReminders } from '../../api/reminders'

import '../../styles/index.css'
import '../../styles/scroll.css'

const UpcomingPage = () => {
	const { fetchedData } = useAllReminders()

	// console.log(fetchedData[0])

	const result = fetchedData.map((item) => {
		console.log(item.payload)
		return (
			<>
				<p>{item.payload.title}</p>
				<p>
					Assigned by {item.payload.creator} to {item.payload.assignees}
				</p>
				<p>{item.payload.description}</p>
				<p>Start Date: {item.payload.startDate}</p>
				<p>Due Date: {item.payload.dueDate}</p>
			</>
		)
	})

	// Pass through sort hook
	// const sortedDeadlineStore = useSort(deadlineStore)

	// Can be passed through search hook

	// Then use this data to render

	return <>{result}</>
}

export default UpcomingPage
