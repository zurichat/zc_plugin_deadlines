import React from 'react'
import { useAllReminders } from '../../api/reminders'
import DeadlineCard from '../../components/deadlineCard'
import Skeleton from '../../components/skeleton/skeleton'

const UpcomingPage = () => {
	const { fetchedData, isPlaceholderData, isLoading } = useAllReminders()

	return !isPlaceholderData && !isLoading ? (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{fetchedData.map((val) => (
				<div key={val.object_id}>
					<DeadlineCard
						title={val.title}
						description={val.description}
						assigner={val.creator}
						assignees={val.assignee}
						startDate={val.startDate}
						dueDate={val.dueDate}
						priority={val.priority}
					/>
				</div>
			))}
		</div>
	) : (
		<div className="flex h-screen justify-center items-center">
			<Skeleton counter={3} />
		</div>
	)
}

export default UpcomingPage
