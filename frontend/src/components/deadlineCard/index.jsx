import React from 'react'

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

	return (
		<div className="ring-1 ring-brand-border ring-opacity-50 flex flex-col p-4 rounded-xl">
			<div id="header-text" className="mb-4">
				<div className="flex">
					<p className="font-semibold text-lg">{title}</p>
					<div
						id="priority"
						className={`w-2 h-2 rounded-full self-center ml-2 ${priority_bg}`}
					/>
				</div>
				<p className="text-brand-text-body text-opacity-50">{`Assigned by ${assigner} to #${assignees}`}</p>
			</div>
			<p className="">{description}</p>
			<div id="y-divider" className="border-1/2 border-opacity-50 mt-3 mb-4" />
			<div className="flex">
				<div id="startDate" className="flex">
					<div>
						<p>Start Date:</p>
						<p>{startDate}</p>
					</div>
				</div>
				<div id="dueDate" className="flex">
					<div>
						<p>Due Date:</p>
						<p>{dueDate}</p>
					</div>
				</div>
				<div id="dueIn" className="flex">
					<div>
						<p>Due In:</p>
						<p>{dueDate}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeadlineCard
