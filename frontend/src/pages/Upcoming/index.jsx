import React from 'react'
import { useAllReminders } from '../../api/reminders'
import DeadlineCard from '../../components/deadlineCard'
import Skeleton from '../../components/reusableScreens/skeleton/skeleton'

const UpcomingPage = () => {
	const { fetchedData, isPlaceholderData, isLoading, isError } =
		useAllReminders()

	return !isPlaceholderData && !isLoading ? (
		isError ? (
			<div className="dtw-text-center dtw-font-semibold">
				An unexpected error occured &#128542;
			</div>
		) : (
			<div className="dtw-grid dtw-gap-4 dtw-grid-cols-1 sm:dtw-grid-cols-2 lg:dtw-grid-cols-3">
				{Array.isArray(fetchedData) &&
					fetchedData.length > 0 &&
					fetchedData.map((val) => (
						<div key={val.object_id}>
							<DeadlineCard
								title={val.title}
								description={val.description}
								assigner={val.creator.userName}
								assignees={val.assignee.channelName}
								startDate={val.startDate}
								dueDate={val.dueDate}
								priority={val.priority}
								object_id={val.object_id}
							/>
						</div>
					))}
			</div>
		)
	) : (
		<div>
			<Skeleton type="card" counter={8} />
		</div>
	)
}

export default UpcomingPage
