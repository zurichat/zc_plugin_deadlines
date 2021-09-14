import React from 'react'
import ModalBase from './index'
// import AvatarIcon from '../../../assets/svg/Assigner.svg'

// const deadline = {
// 	title: 'Design Reminder Modals',
// 	priorityLevel: 'Low',
// 	description:
// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
// 	startDate: '31st August, 2021',
// 	dueDate: '1st Sept, 2021',
// 	dueIn: '24 hours',
// 	assignedTo: '#channelname',
// 	assignedBy: 'John Doe',
// 	assignerAvatar: AvatarIcon,
// }
const AdminViewOther = ({
	title,
	priorityLevel,
	description,
	startDate,
	dueDate,
	dueIn,
	assignedTo,
	assignedBy,
	assignerAvatar,
}) => {
	return (
		<ModalBase title="Q4-Marketing Deadline">
			<div>
				<h2 className="text-gray-900 mb-2 font-bold">Description</h2>
				<p className="text-gray-800">{description}</p>
				<div className="mt-6 flex justify-start align-middle">
					<div className="pr-6">
						<h3 className="font-bold">Start Date</h3>
						<p className="text-gray-600">{startDate}</p>
					</div>
					<div className="pr-6">
						<h3 className="font-bold">Due Date</h3>
						<p className="text-gray-600">{dueDate}</p>
					</div>
					<div className="pr-6">
						<h3 className="font-bold">Due In</h3>
						<p className="text-red-600">{dueIn}</p>
					</div>
				</div>
				<div className="start mt-6">
					<h3 className="font-bold">Asssigned To</h3>
					<p className="text-gray-600">{assignedTo}</p>
				</div>
				<div className="start mt-6">
					<h3 className="font-bold">Asssigned By</h3>
					<div className="flex mt-2">
						<img src={assignerAvatar} alt="assigner-avatar" />
						<p className="text-gray-600 pl-5">{assignedBy}</p>
					</div>
				</div>
			</div>
		</ModalBase>
	)
}

export default AdminViewOther
