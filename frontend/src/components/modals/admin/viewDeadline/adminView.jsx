import React, { useState, useRef } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import RowTitleDes from '../../component/rowTitleDes'
import Avatar from '../../component/avatar'
import StatusChanger from '../../component/taskStatus'
import ModalBase from '../../modalBase'
import Priority from '../../component/priority'

const AdminView = (props) => {
	const {
		description,
		startDate,
		dueDate,
		dueIn,
		assignedTo,
		assignee,
		src,
		alt,
		title,
		priority,
		assigneeOnline,
	} = props
	// debugger
	const [taskStatus, setTaskStatus] = useState({ status: false }) //should receive initial task status from props
	const toggler = useRef()
	const deadlineStatus = useRef()
	const radioSelect = useRef()

	const DeadlineTitle = (
		<div className="dtw-flex dtw-gap-4">
			{title} <Priority status={priority} forTitle />
		</div>
	)
	return (
		<ModalBase title={DeadlineTitle}>
			<div className=" dtw-flex dtw-flex-col dtw-gap-7">
				<ColTitleDes title="Description" writeUp={description} />
				<div className="dtw-flex ">
					<div className="dtw-flex dtw-gap-6">
						<ColTitleDes title="Start Date" writeUp={startDate} />
						<ColTitleDes title="Due Date" writeUp={dueDate} />
						<ColTitleDes
							title="Due In"
							writeUp={<span className="dtw-text-brand-error">{dueIn} </span>}
						/>
					</div>
				</div>
				<ColTitleDes title="Assigned To" writeUp={assignedTo} />
				<ColTitleDes
					title="Assignee"
					writeUp={
						<RowTitleDes
							title={<Avatar src={src} alt={alt} isOnline={assigneeOnline} />}
							writeUp={assignee}
						/>
					}
				/>
				<div className="dtw-flex ">
					<div ref={deadlineStatus} className="dtw-h-6 dtw-w-20 "></div>
					<StatusChanger
						currentStatus={taskStatus.status}
						toggler={toggler}
						setStatus={setTaskStatus}
						deadlineStatus={deadlineStatus}
						radioSelect={radioSelect}
					/>
				</div>
				<div className="dtw-flex dtw-justify-end">
					<button className="dtw-w-16 dtw-h-7  dtw-text-sm dtw-text-brand-primary dtw-font-semibold">
						Cancel
					</button>
					<button className="dtw-w-16 dtw-h-7  dtw-text-sm dtw-bg-brand-primary dtw-font-semibold dtw-text-brand-bg-white">
						Update
					</button>
				</div>
			</div>
		</ModalBase>
	)
}

export default AdminView
