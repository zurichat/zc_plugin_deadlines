import React from 'react'
import ModalBase from '../modalBase/index'
import Avatar from '../component/avatar'
import Profile from '../../../assets/svg/Assigner.svg'
import Priority from '../component/priority'
import { DateTime } from 'luxon'
import { useAllReminders } from '../../../api/reminders'

const AdminViewOther = ({ object_id }) => {
	const { fetchedData } = useAllReminders()

	const [
		{
			assignee,
			description,
			dueDate,
			startDate,
			title,
			creator,
			priority,
			// reminders,
			// shouldRemind,
			// staus,
		},
	] = fetchedData.filter((deadline) => deadline.object_id === object_id)

	const startDateStr = DateTime.fromISO(startDate, {
		zone: 'UTC',
	}).toLocaleString(DateTime.DATE_MED)

	const dueDateStr = DateTime.fromISO(dueDate, {
		zone: 'UTC',
	}).toLocaleString(DateTime.DATE_MED)

	const remaining = DateTime.fromISO(dueDate)
		.diffNow(['days', 'hours', 'minutes', 'seconds', 'months'])
		.toObject()

	const remainingStr =
		remaining['months'] > 0
			? `${remaining['months']} ${
					remaining['months'] === 1 ? 'month' : 'months'
			  }`
			: remaining['days'] > 0
			? `${remaining['days']} ${remaining['days'] === 1 ? 'day' : 'days'}`
			: remaining['hours'] > 0
			? `${remaining['hours']} ${remaining['hours'] === 1 ? 'hour' : 'hours'}`
			: remaining['minutes'] > 0
			? `${remaining['minutes']} ${
					remaining['minutes'] === 1 ? 'minute' : 'minutes'
			  }`
			: remaining['seconds'] > 0
			? `${remaining['seconds']} ${
					remaining['seconds'] === 1 ? 'second' : 'seconds'
			  }`
			: `Expired`
	const details = {
		description,
		title,
		start: startDateStr,
		due: dueDateStr,
		priority,
		dueIn: remainingStr,
		assignee: creator.userName,
		assignedTo: assignee.channelName,
		src: Profile,
	}

	const DeadlineTitle = (
		<div className="flex gap-4">
			{details.title} <Priority status={details.priority} forTitle />
		</div>
	)

	return (
		<ModalBase title={DeadlineTitle}>
			<div>
				<h2 className="text-gray-900 mb-2 font-bold">Description</h2>
				<p className="text-gray-800">{details.description}</p>
				<div className="mt-6 flex justify-start align-middle">
					<div className="pr-6">
						<h3 className="font-bold">Start Date</h3>
						<p className="text-gray-600">{details.start}</p>
					</div>
					<div className="pr-6">
						<h3 className="font-bold">Due Date</h3>
						<p className="text-gray-600">{details.due}</p>
					</div>
					<div className="pr-6">
						<h3 className="font-bold">Due In</h3>
						<p className="text-red-600">{details.dueIn}</p>
					</div>
				</div>
				<div className="start mt-6">
					<h3 className="font-bold">Asssigned To</h3>
					<p className="text-gray-600">{details.assignedTo}</p>
				</div>
				<div className="start mt-6">
					<h3 className="font-bold">Asssigned By</h3>
					<div className="flex mt-2">
						<Avatar
							src={details.src}
							alt={details.alt}
							className="w-6 h-6"
							isOnline={details.assigneeOnline}
						/>
						<p className="text-gray-600 pl-5">{details.assignee}</p>
					</div>
				</div>
			</div>
		</ModalBase>
	)
}

export default AdminViewOther
