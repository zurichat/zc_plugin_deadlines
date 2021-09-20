import React, { useState, useRef } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import RowTitleDes from '../../component/rowTitleDes'
import Avatar from '../../component/avatar'
import avatar from '../../../../assets/png/avatar1.png'
import StatusChanger from '../../component/taskStatus'
import ModalBase from '../../modalBase'
import Priority from '../../component/priority'
import { useAllReminders } from '../../../../api/reminders'
import { DateTime } from 'luxon'

const AdminView = ({ object_id }) => {
	const { fetchedData } = useAllReminders()
	const [
		{
			description,
			startDate,
			dueDate,
			creator,
			assignee,
			title,
			priority,
			// object_id,
			status,
		},
	] = fetchedData.filter((deadline) => deadline.object_id === object_id)
	const { userName } = creator
	const { channelName } = assignee
	// debugger
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
	// const {
	// 	description,
	// 	startDate,
	// 	dueDate,
	// 	dueIn,
	// 	assignedTo,
	// 	assignee,
	// 	src,
	// 	title,
	// 	priority,
	// 	assigneeOnline,
	// 	object_id,
	// 	status,
	// } = props
	const statusCheck = (status) => {
		return status === 'completed'
	}
	const [taskStatus, setTaskStatus] = useState({ status: statusCheck(status) }) //should receive initial task status from props
	const toggler = useRef()
	const deadlineStatus = useRef()
	const radioSelect = useRef()
	const toggleHolder = useRef()

	const DeadlineTitle = (
		<div className="flex gap-4">
			{title} <Priority status={priority} forTitle />
		</div>
	)

	return (
		<ModalBase title={DeadlineTitle}>
			<div className=" flex flex-col gap-7">
				<ColTitleDes title="Description" writeUp={description} />
				<div className="flex ">
					<div className="flex gap-6">
						<ColTitleDes title="Start Date" writeUp={startDateStr} />
						<ColTitleDes title="Due Date" writeUp={dueDateStr} />
						<ColTitleDes
							title="Due In"
							writeUp={
								<span className="text-brand-error">{remainingStr} </span>
							}
						/>
					</div>
				</div>
				<ColTitleDes title="Assigned By" writeUp={userName} />
				<ColTitleDes
					title="Assignee"
					writeUp={
						<RowTitleDes
							title={<Avatar src={avatar} />}
							writeUp={channelName}
						/>
					}
				/>
				<div className="flex ">
					<div ref={deadlineStatus} className="h-6 w-20 "></div>
					<StatusChanger
						currentStatus={taskStatus.status}
						toggler={toggler}
						setStatus={setTaskStatus}
						deadlineStatus={deadlineStatus}
						radioSelect={radioSelect}
						toggleHolder={toggleHolder}
						taskId={object_id}
					/>
				</div>
				{/* <div className="flex justify-end">
					<button
						onClick={closeModal}
						className="w-16 h-7  text-sm text-brand-primary font-semibold"
					>
						Cancel
					</button>
					<button className="w-16 h-7  text-sm bg-brand-primary font-semibold text-brand-bg-white">
						Update
					</button>
				</div> */}
			</div>
		</ModalBase>
	)
}

export default AdminView
