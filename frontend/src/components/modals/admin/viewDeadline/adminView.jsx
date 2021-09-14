import React, { useState, useRef } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import RowTitleDes from '../../component/rowTitleDes'
import Avatar from '../../component/avatar'
import StatusChanger from '../../component/taskStatus'

const AdminView = (
	{ description, startDate, dueDate, dueIn, assignedTo, assignee, src, alt },
	props
) => {
	const { title } = props
	const [taskStatus, setTaskStatus] = useState({ status: false }) //should receive initial task status from props
	const toggler = useRef()
	// const radioSelector = useRef()
	return (
		<div className=" w-6/7 flex-col md:w-3/7 md:ml-96">
			<div className="h-12 bg-brand-primary flex items-center md:rounded-t-lg">
				<h2 className=" h-1/3 text-xs font-craFont font-bold mx-4">{title}</h2>
				<h2 className=" h-1/3 text-xs font-craFont font-bold mx-1">
					Priority level
				</h2>
			</div>
			<div className="flex-col border-black border-2 p-4 md:rounded-b-lg">
				<ColTitleDes title="Description" writeUp={description} />
				<div className="flex ">
					<div className="flex gap-6">
						<ColTitleDes title="Start Date" writeUp={startDate} />
						<ColTitleDes title="Due Date" writeUp={dueDate} />
						<ColTitleDes
							title="Due In"
							writeUp={<span className="text-brand-error">{dueIn} </span>}
						/>
					</div>
				</div>
				<ColTitleDes title="Assigned To" writeUp={assignedTo} />
				<ColTitleDes
					title="Assignee"
					writeUp={
						<RowTitleDes
							title={<Avatar src={src} alt={alt} />}
							writeUp={assignee}
						/>
					}
				/>
				<div className="flex ">
					<StatusChanger
						currentStatus={taskStatus.status}
						toggler={toggler}
						setStatus={setTaskStatus}
					/>
				</div>
				<div className="flex justify-end">
					<button className="w-16 h-7  text-sm text-brand-primary font-semibold">
						Cancel
					</button>
					<button className="w-16 h-7  text-sm bg-brand-primary font-semibold text-brand-bg-white">
						Update
					</button>
				</div>
			</div>
		</div>
	)
}

export default AdminView
