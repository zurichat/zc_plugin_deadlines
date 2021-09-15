import React from 'react'
import ModalBase from './modalBase/index'
import Avatar from '../../components/modals/component/avatar'
import Priority from './component/priority'

const AdminViewOther = ({ details }) => {
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
						<p className="text-gray-600">{details.startDate}</p>
					</div>
					<div className="pr-6">
						<h3 className="font-bold">Due Date</h3>
						<p className="text-gray-600">{details.dueDate}</p>
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
							alt={details.src}
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
