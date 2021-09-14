import React from 'react'
// import { useAllReminders } from '../../api/reminders'
// import DeadlineCard from '../../components/deadlineCard'

import '../../styles/index.css'
import '../../styles/scroll.css'

const OverduePage = () => {
	// const { fetchedData, isPlaceholderData } = useAllReminders()

	// const Result = ({ fetchedData }) => {
	// 	const arr = fetchedData.data.data

	// 	return arr.map((item, index) => (
	// 		<DeadlineCard
	// 			key={index}
	// 			title={item.title}
	// 			description={item.description}
	// 		/>
	// 	))
	// }

	// return !isPlaceholderData ? (
	// 	<div>
	// 		<Result fetchedData={fetchedData} />
	// 	</div>
	// ) : (
	// 	<div>loading</div>
	// )

	return <div>Overdue</div>
}

export default OverduePage
