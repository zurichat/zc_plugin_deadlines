import React, { useContext } from 'react'
import { DateTime } from 'luxon'

import { ReactComponent as Date } from '../../assets/svg/date.svg'
import { ReactComponent as Clock } from '../../assets/svg/clock-group.svg'
import { ModalContext } from '../../context/ModalContext'
import avatar from '../../assets/png/avatar1.png'
import DeadlineCardDropdown from './dropdown'

const DeadlineCard = ({
	title,
	description,
	assigner,
	assignees,
	startDate,
	dueDate,
	priority,
	object_id,
}) => {
	const { setModalData } = useContext(ModalContext)

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

	const UserViewDeadline = () => {
		setModalData({
			modalShow: true,
			modalType: 'userView',
			modalData: {
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
				object_id,
			},
		})
	}

	return (
		<div className="ring-1 ring-brand-border ring-opacity-50 flex p-4 rounded-xl min-h-full justify-evenly">
			<div className="w-card-w">
				<div
					id="header-text"
					className="cursor-pointer"
					onClick={UserViewDeadline}
				>
					<div className="flex justify-between">
						<div className="flex">
							<p className="font-semibold md:text-lg text-brand-text-header">
								{title}
							</p>
							<div
								id="priority"
								className={`min-w-priority h-2 rounded-full self-center ml-1 md:ml-2 ${priority_bg}`}
							/>
						</div>
					</div>
					<p className="text-brand-text-body text-opacity-50 text-sm md:text-base">{`Assigned by ${assigner} to #${assignees}`}</p>
				</div>
				<p className="text-brand-text-body mt-4 mb-6 text-sm md:text-base line-clamp-2">
					{description}
				</p>
				<div id="dueIn" className="flex items-center">
					<div className="mr-2">
						<div className="bg-brand-svg-green rounded-full p-1 w-5 h-5 flex items-center justify-center">
							<Clock />
						</div>
					</div>
					<b className="text-brand-text-body text-xs xs:text-sm md:text-base">
						Due In:
					</b>
					&nbsp;
					<span
						className={
							DateTime.fromISO(dueDate).diffNow().as('hours') < 3
								? 'text-brand-text-overdue text-xs xs:text-sm md:text-base'
								: 'text-brand-text-body text-xs xs:text-sm md:text-base'
						}
					>
						{remainingStr}
					</span>
				</div>
			</div>
			<div id="y-divider" className="border-1/2 border-opacity-50 mx-4" />
			<div className="flex flex-col justify-between">
				<DeadlineCardDropdown object_id={object_id} />
				<div id="startDate" className="flex">
					<div className="mr-2 pt-1">
						<div className="bg-brand-svg-blue rounded-full p-1 w-5 h-5 flex items-center justify-center">
							<Date />
						</div>
					</div>
					<div>
						<p className="text-brand-text-body text-opacity-60 text-xs md:text-sm">
							Start Date:
						</p>
						<b className="text-brand-text-body text-xs md:text-sm">
							{startDateStr}
						</b>
					</div>
				</div>
				<div
					id="y-divider"
					className="border-1/2 border-opacity-50 w-full mt-2 mb-6"
				/>
				<div id="dueDate" className="flex">
					<div className="mr-2 pt-1">
						<div className="bg-brand-svg-blue rounded-full p-1 w-5 h-5 flex items-center justify-center">
							<Date />
						</div>
					</div>
					<div>
						<p className="text-brand-text-body text-opacity-60 text-xs md:text-sm">
							Due Date:
						</p>
						<b className="text-brand-text-body text-xs md:text-sm">
							{dueDateStr}
						</b>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeadlineCard
