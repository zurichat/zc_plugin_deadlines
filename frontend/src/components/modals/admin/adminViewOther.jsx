import React from 'react'
import ModalBase from '../modalBase/index'
import Avatar from '../component/avatar'
import Priority from '../component/priority'

const AdminViewOther = ({ details }) => {
	const DeadlineTitle = (
		<div className="dtw-flex dtw-gap-4">
			{details.title} <Priority status={details.priority} forTitle />
		</div>
	)

	return (
		<ModalBase title={DeadlineTitle}>
			<div>
				<h2 className="dtw-text-gray-900 dtw-mb-2 dtw-font-bold">
					Description
				</h2>
				<p className="dtw-text-gray-800">{details.description}</p>
				<div className="dtw-mt-6 dtw-flex dtw-justify-start dtw-align-middle">
					<div className="dtw-pr-6">
						<h3 className="dtw-font-bold">Start Date</h3>
						<p className="dtw-text-gray-600">{details.startDate}</p>
					</div>
					<div className="dtw-pr-6">
						<h3 className="dtw-font-bold">Due Date</h3>
						<p className="dtw-text-gray-600">{details.dueDate}</p>
					</div>
					<div className="dtw-pr-6">
						<h3 className="dtw-font-bold">Due In</h3>
						<p className="dtw-text-red-600">{details.dueIn}</p>
					</div>
				</div>
				<div className="dtw-start dtw-mt-6">
					<h3 className="dtw-font-bold">Asssigned To</h3>
					<p className="dtw-text-gray-600">{details.assignedTo}</p>
				</div>
				<div className="dtw-start dtw-mt-6">
					<h3 className="dtw-font-bold">Asssigned By</h3>
					<div className="dtw-flex dtw-mt-2">
						<Avatar
							src={details.src}
							alt={details.src}
							className="w-6 dtw-h-6"
							isOnline={details.assigneeOnline}
						/>
						<p className="dtw-text-gray-600 dtw-pl-5">{details.assignee}</p>
					</div>
				</div>
			</div>
		</ModalBase>
	)
}

export default AdminViewOther
