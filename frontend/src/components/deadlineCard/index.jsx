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
		<div className="dtw-ring-1 dtw-ring-brand-border dtw-ring-opacity-50 dtw-flex dtw-p-4 dtw-rounded-xl dtw-min-h-full dtw-justify-evenly">
			<div className="dtw-w-card-w">
				<div
					id="header-text"
					className="cursor-pointer"
					onClick={UserViewDeadline}
				>
					<div className="dtw-flex dtw-justify-between">
						<div className="dtw-flex">
							<p className="dtw-font-semibold md:dtw-text-lg dtw-text-brand-text-header">
								{title}
							</p>
							<div
								id="priority"
								className={`min-w-priority h-2 dtw-rounded-full self-center ml-1 md:ml-2 ${priority_bg}`}
							/>
						</div>
					</div>
					<p className="dtw-text-brand-text-body dtw-text-opacity-50 dtw-text-sm md:dtw-text-base">{`Assigned by ${assigner} to #${assignees}`}</p>
				</div>
				<p className="dtw-text-brand-text-body dtw-mt-4 dtw-mb-6 dtw-text-sm md:dtw-text-base dtw-line-clamp-2">
					{description}
				</p>
				<div id="dueIn" className="dtw-flex dtw-items-center">
					<div className="dtw-mr-2">
						<div className="dtw-bg-brand-svg-green dtw-rounded-full dtw-p-1 dtw-w-5 dtw-h-5 dtw-flex dtw-items-center dtw-justify-center">
							<Clock />
						</div>
					</div>
					<b className="dtw-text-brand-text-body dtw-text-xs xs:dtw-text-sm md:dtw-text-base">
						Due In:
					</b>
					&nbsp;
					<span
						className={
							DateTime.fromISO(dueDate).diffNow().as('hours') < 3
								? 'text-brand-text-overdue dtw-text-xs xs:dtw-text-sm md:dtw-text-base'
								: 'dtw-text-brand-text-body dtw-text-xs xs:dtw-text-sm md:dtw-text-base'
						}
					>
						{remainingStr}
					</span>
				</div>
			</div>
			<div
				id="y-divider"
				className="dtw-border-1/2 dtw-border-opacity-50 dtw-mx-4"
			/>
			<div className="dtw-flex dtw-flex-col dtw-justify-between">
				<DeadlineCardDropdown object_id={object_id} />
				<div id="startDate" className="dtw-flex">
					<div className="dtw-mr-2 dtw-pt-1">
						<div className="dtw-bg-brand-svg-blue dtw-rounded-full dtw-p-1 dtw-w-5 dtw-h-5 dtw-flex dtw-items-center dtw-justify-center">
							<Date />
						</div>
					</div>
					<div>
						<p className="dtw-text-brand-text-body dtw-text-opacity-60 dtw-text-xs md:dtw-text-sm">
							Start Date:
						</p>
						<b className="dtw-text-brand-text-body dtw-text-xs md:dtw-text-sm">
							{startDateStr}
						</b>
					</div>
				</div>
				<div
					id="y-divider"
					className="border-1/2 dtw-border-opacity-50 dtw-w-full dtw-mt-2 dtw-mb-6"
				/>
				<div id="dueDate" className="dtw-flex">
					<div className="dtw-mr-2 dtw-pt-1">
						<div className="dtw-bg-brand-svg-blue dtw-rounded-full dtw-p-1 dtw-w-5 dtw-h-5 dtw-flex dtw-items-center dtw-justify-center">
							<Date />
						</div>
					</div>
					<div>
						<p className="dtw-text-brand-text-body dtw-text-opacity-60 dtw-text-xs md:dtw-text-sm">
							Due Date:
						</p>
						<b className="dtw-text-brand-text-body dtw-text-xs md:dtw-text-sm">
							{dueDateStr}
						</b>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeadlineCard
