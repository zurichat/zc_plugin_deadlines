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
			<ModalContextProvider>
				<div className="border-2 border-black w-3/7 h-screen/1.5 rounded-3xl"></div>
			</ModalContextProvider>
		</div>
	)
}

export default UpcomingPage
