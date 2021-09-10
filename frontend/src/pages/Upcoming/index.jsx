import React, { useContext } from 'react'
import { useSort } from '../../components/sort'
import { DeadlineStore } from '../../context/DeadlineStore'

const UpcomingPage = () => {
	const { deadlineStore } = useContext(DeadlineStore)

	// Pass through sort hook
	const sortedDeadlineStore = useSort(deadlineStore)

	// Then use this data to render

	return (
		<div>
			<div>Upcoming</div>
		</div>
	)
}

export default UpcomingPage
