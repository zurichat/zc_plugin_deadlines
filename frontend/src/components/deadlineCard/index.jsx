import React, { useContext } from 'react'
import { DateTime } from 'luxon'

import { BsThreeDots } from 'react-icons/bs'
import { ReactComponent as Date } from '../../assets/svg/date.svg'
import { ReactComponent as Clock } from '../../assets/svg/clock-group.svg'
import { ModalContext } from '../../context/ModalContext'
import avatar from '../../assets/png/avatar1.png'
const DeadlineCard = ({
	title,
	description,
	assigner,
	assignees,
	startDate,
	dueDate,
	priority,
}) => {
	const priority_bg =
		priority === 'low'
			? 'bg-brand-priority-low'
			: priority === 'medium'
			? 'bg-brand-priority-medium'
			: priority === 'high'
			? 'bg-brand-priority-high'
			: 'bg-gray'

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

	const props = {
		priority,
		title,
		description,
		startDate: startDateStr,
		dueDate: dueDateStr,
		assignedTo: assignees,
		assignee: assigner,
		alt: 'pic',
		src: avatar,
		dueIn: remainingStr,
		assigneeOnline: true,
	}
	const { setModalData } = useContext(ModalContext)
	const UserViewDeadline = () => {
		setModalData({
			modalShow: true,
			modalType: 'userView',
			modalData: {
				...props,
			},
		})
	}
	return (
		<div
			className="ring-1 ring-brand-border ring-opacity-50 flex flex-col p-4 rounded-xl"
			onClick={UserViewDeadline}
		>
			<div id="header-text" className="mb-4">
				<div className="flex justify-between">
					<div className="flex">
						<p className="font-semibold text-lg text-brand-text-header">
							{title}
						</p>
						<div
							id="priority"
							className={`w-2 h-2 rounded-full self-center ml-2 ${priority_bg}`}
						/>
					</div>
					<BsThreeDots className="self-center place-self-end cursor-pointer text-black text-opacity-50" />
				</div>
				<p className="text-brand-text-body text-opacity-50">{`Assigned by ${assigner} to #${assignees}`}</p>
			</div>
			<p className="text-brand-text-body">{description}</p>
			<div id="y-divider" className="border-1/2 border-opacity-50 mt-3 mb-4" />
			<div className="flex">
				<div id="startDate" className="flex">
					<div className="mr-2 pt-1">
						<div className="bg-brand-svg-blue rounded-full p-1">
							<Date />
						</div>
					</div>
					<div>
						<p className="text-brand-text-body text-opacity-60 ">Start Date:</p>
						<p className="text-brand-text-body">{startDateStr}</p>
					</div>
				</div>
				<div id="x-divider" className="border-1/2 border-opacity-50 mx-3" />
				<div id="dueDate" className="flex">
					<div className="mr-2 pt-1">
						<div className="bg-brand-svg-blue rounded-full p-1">
							<Date />
						</div>
					</div>
					<div>
						<p className="text-brand-text-body text-opacity-60">Due Date:</p>
						<p className="text-brand-text-body">{dueDateStr}</p>
					</div>
				</div>
				<div id="x-divider" className="border-1/2 border-opacity-50 mx-3" />
				<div id="dueIn" className="flex">
					<div className="mr-2 pt-1">
						<div className="bg-brand-svg-green rounded-full p-1">
							<Clock />
						</div>
					</div>
					<div>
						<p className="text-brand-text-body text-opacity-60">Due In:</p>
						<p
							className={
								DateTime.fromISO(dueDate).diffNow().as('hours') < 3
									? 'text-brand-text-overdue'
									: 'text-brand-text-body'
							}
						>
							{remainingStr}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeadlineCard
