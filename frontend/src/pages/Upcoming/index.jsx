import React from 'react'
import FlipMove from 'react-flip-move'
import { useAllReminders } from '../../api/reminders'
import DeadlineCard from '../../components/deadlineCard'
import Skeleton from '../../components/reusableScreens/skeleton/skeleton'

const UpcomingPage = () => {
	const { fetchedData, isPlaceholderData, isLoading, isError } =
		useAllReminders()

	return !isPlaceholderData && !isLoading ? (
		isError ? (
			<div className="text-center font-semibold">
				An unexpected error occured &#128542;
			</div>
		) : (
			<FlipMove
				appearAnimation="elevator"
				className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden"
			>
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
			</FlipMove>
		)
	) : (
		<div>
			<Skeleton type="card" counter={8} />
		</div>
	)
}

export default UpcomingPage
