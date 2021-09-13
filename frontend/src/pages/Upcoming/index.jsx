import React from 'react'
import { useAllReminders } from '../../api/reminders'

import '../../styles/index.css'
import '../../styles/scroll.css'

const UpcomingPage = () => {
	const { fetchedData, isPlaceholderData } = useAllReminders()

	const Result = ({ fetchedData }) => {
		const arr = fetchedData.data.data

		return arr.map((item, index) => (
			<div key={index}>
				<p>{item.title}</p>
				<p>
					Assigned by {item.creator} to {item.assignee}
				</p>
				<p>{item.description}</p>
				<p>Start Date: {item.startDate}</p>
				<p>Due Date: {item.dueDate}</p>
			</div>
		))
	}

	return !isPlaceholderData ? (
		<div>
			<Result fetchedData={fetchedData} />
		</div>
	) : (
		<div>loading</div>
	)
}

export default UpcomingPage
