import React from 'react'
import { useAllReminders } from '../../api/reminders'
import DeadlineCard from '../../components/deadlineCard'

const UpcomingPage = () => {
	const { fetchedData, isPlaceholderData, isError } = useAllReminders()

	const mockArray = [
		{
			object_id: '614077c56173056af01b4ba8',
			title: 'Accounting - Spreadsheet',
			description:
				'Create new sales spreadsheet for Creative Juices enterprise.',
			status: 'pending',
			startDate: '2021-08-31T00:00:00.000Z',
			dueDate: '2021-11-15T07:30:00.000Z',
			creator: 'Joan',
			assignee: 'accounting',
			priority: 'low',
		},
		{
			object_id: '614077c56173056af01b4br7',
			title: 'Website Launch',
			description:
				'Finalise and relaunch our company website. We’ve got 24 hours guys.',
			status: 'pending',
			startDate: '2021-08-30T00:00:00.000Z',
			dueDate: '2021-09-17T00:00:00.000Z',
			creator: 'Joe',
			assignee: 'dev-team',
			priority: 'high',
		},
		{
			object_id: '614077c56173056af34b4br8',
			title: 'Logo Design',
			description: 'Redesign the edges of Fine touch LLC’s company logo.',
			status: 'completed',
			startDate: '2021-05-30T00:00:00.000Z',
			dueDate: '2021-09-23T00:00:00.000Z',
			creator: 'Mark',
			assignee: 'design-team',
			priority: 'medium',
		},
		{
			object_id: '614077c561sd33056af34b4dne',
			title: 'Frontend - Nav Fixes',
			description: 'Fix Powerhouse.com’s buggy navigation bar.',
			status: 'pending',
			startDate: '2021-08-01T00:00:00.000Z',
			dueDate: '2021-09-20T00:00:00.000Z',
			creator: 'Juliet',
			assignee: 'dev-team',
			priority: 'high',
		},
		{
			object_id: '414057c561sd354656af34b4dt',
			title: "COO's Birthday",
			description: 'Handle all the preparations for John’s surprise birthday.',
			status: 'pending',
			startDate: '2021-09-03T00:00:00.000Z',
			dueDate: '2021-12-23T00:00:00.000Z',
			creator: 'Peter',
			assignee: 'operations-team',
			priority: 'low',
		},
	]

	const Result = ({ fetchedData }) => {
		const arr = fetchedData.data.data

		return arr.map((item, index) => (
			<div
				key={index}
				className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
			>
				<DeadlineCard
					title={item.title}
					description={item.description}
					assigner={item.creator}
					assignees={item.assignee}
					startDate={item.startDate}
					dueDate={item.dueDate}
					priority={item.priority}
				/>
			</div>
		))
	}

	return !isPlaceholderData && !isError ? (
		<div>
			<Result fetchedData={fetchedData} />
		</div>
	) : (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{mockArray.map((val) => (
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
	)
}

export default UpcomingPage
