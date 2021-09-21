import React, { useContext } from 'react'
import { useAllReminders } from '../../api/reminders'
import DeadlineCard from '../../components/deadlineCard'
import Skeleton from '../../components/reusableScreens/skeleton/skeleton'
import { SortContext } from '../../components/sort'

const OverduePage = () => {
	const { fetchedData, isPlaceholderData, isLoading, isError } =
		useAllReminders()
	const { sort } = useContext(SortContext)

	const test = 'test'
	const date = new Date()
	const dateNow = date.toISOString()
	const getDate = (a) => {
		const date = new Date(a)
		return date.getTime()
	}

	const sortData = (array, sort) => {
		if (sort.length < 1) return array
		else {
			switch (sort.i) {
				case 'Newest to Oldest':
					return [...array].sort(
						(a, b) => getDate(a.startDate) - getDate(b.startDate)
					)
				case 'Oldest to Newest':
					return [...array].sort(
						(a, b) => getDate(b.startDate) - getDate(a.startDate)
					)
				case 'Due Date (Ascending)':
					return [...array].sort(
						(a, b) => getDate(a.dueDate) - getDate(b.dueDate)
					)
				case 'Due Date (Descending)':
					return [...array].sort(
						(a, b) => getDate(b.dueDate) - getDate(b.dueDate)
					)
			}
		}
	}

	const sortedData = sortData(fetchedData, sort)

	return !isPlaceholderData && !isLoading ? (
		isError ? (
			<div className="text-center font-semibold">
				An unexpected error occured &#128542;
			</div>
		) : (
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{Array.isArray(sortedData) &&
					sortedData.length > 0 &&
					sortedData.map((val) => {
						return dateNow > val.dueDate ? (
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
						) : (
							false
						)
					})}
			</div>
		)
	) : (
		<div>
			<Skeleton type="card" counter={8} />
		</div>
	)
}

export default OverduePage
