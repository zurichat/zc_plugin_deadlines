import React from 'react'
// import AvatarIcon from '../../../assets/svg/Assigner.svg'

// const deadline = {
// 	title: 'Design Reminder Modals',
// 	priorityLevel: 'Low',
// 	description:
// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
// 	dtw-startDate: '31st August, 2021',
// 	dueDate: '1st Sept, 2021',
// 	dueIn: '24 hours',
// 	assignedTo: '#channelname',
// 	assignedBy: 'John Doe',
// 	assignerAvatar: AvatarIcon,
// }
const OtherAdminModal = ({
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
		<>
			<div className="dtw-border-2 dtw-m-3 dtw-rounded-lg">
				<div className="dtw-text-white dtw-font-bold dtw-rounded-t-md dtw-text-left dtw-bg-green-600 dtw-p-3 dtw-px-5">
					{title} | Priority Level - {priorityLevel}
				</div>
				<div className="dtw-p-6">
					<h2 className="dtw-text-gray-900 dtw-mb-2 dtw-font-bold">
						Description
					</h2>
					<p className="dtw-text-gray-800">{description}</p>
					<div className="dtw-mt-6 dtw-flex dtw-justify-start dtw-align-middle">
						<div className="dtw-pr-6">
							<h3 className="dtw-font-bold">Start Date</h3>
							<p className="dtw-text-gray-600">{startDate}</p>
						</div>
						<div className="dtw-pr-6">
							<h3 className="dtw-font-bold">Due Date</h3>
							<p className="dtw-text-gray-600">{dueDate}</p>
						</div>
						<div className="dtw-pr-6">
							<h3 className="dtw-font-bold">Due In</h3>
							<p className="dtw-text-red-600">{dueIn}</p>
						</div>
					</div>
					<div className="dtw-start dtw-mt-6">
						<h3 className="dtw-font-bold">Asssigned To</h3>
						<p className="dtw-text-gray-600">{assignedTo}</p>
					</div>
					<div className="dtw-start dtw-mt-6">
						<h3 className="dtw-font-bold">Asssigned By</h3>
						<div className="dtw-flex dtw-mt-2">
							<img src={assignerAvatar} alt="assigner-avatar" />
							<p className="dtw-text-gray-600 dtw-pl-5">{assignedBy}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OtherAdminModal
