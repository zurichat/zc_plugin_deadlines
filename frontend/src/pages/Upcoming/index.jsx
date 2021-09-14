import React from 'react'
import { useAllReminders } from '../../api/reminders'
import { ModalContextProvider } from '../../context/ModalContext'

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
			<ModalContextProvider></ModalContextProvider>
		</div>
	)
}

export default UpcomingPage
