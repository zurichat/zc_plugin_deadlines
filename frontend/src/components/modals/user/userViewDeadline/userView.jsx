import React from 'react'

import ColTitleDes from '../../component/columnTitleDes'
import RowTitleDes from '../../component/rowTitleDes'
import Avatar from '../../component/avatar'
import RemindMeCheckBox from '../../component/remindMeCheckBox'
import ModalBase from '../../modalBase/index'
import Priority from '../../component/priority'

// const props = {
// 	priority: 'high',
// 	title: 'Deadline Title',
// 	description:
// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum possimus accusamus cupiditate maxime. Quod eum quaerat voluptatum, unde tempore dolores esse molestias velit, voluptatem animi ipsa saepe soluta minus! Ab!',
// 	startDate: '19 sept,2021',
// 	dueDate: '29 sept,2021',
// 	assignedTo: '#channelName',
// 	assignee: 'john Doe',
// 	alt: 'pic',
//  dueIn: '1hour',
//  assigneeOnline:true
// checkbox: [
// 	{ label: 'Everyday', checked: true },
// 	{ label: 'A week to deadline', checked: false },
// 	{ label: '24 hours to deadline', checked: false },
// 	{ label: '12 hours to deadline', checked: true },
// 	{ label: '2 hours to deadline', checked: false },
// ],
// }
export default function UserViewDeadline({
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
	checkbox,
	assigneeOnline,
}) {
	const DeadlineTitle = (
		<div className="flex gap-4">
			{title} <Priority status={priority} forTitle />
		</div>
	)

	const labels = checkbox
		? checkbox
		: [
				{ label: 'Everyday', checked: false },
				{ label: 'A week to deadline', checked: false },
				{ label: '24 hours to deadline', checked: false },
				{ label: '12 hours to deadline', checked: false },
				{ label: '2 hours to deadline', checked: false },
		  ]
	const onchange = (index, isChecked) => {
		labels[index] = { ...labels[index], checked: isChecked }
	}

	return (
		<ModalBase title={DeadlineTitle}>
			<div className="flex flex-col gap-7">
				<ColTitleDes title="Description" writeUp={description} />
				<div className="flex gap-6">
					<ColTitleDes title="Start Date" writeUp={startDate} />
					<ColTitleDes title="Due Date" writeUp={dueDate} />
					<ColTitleDes
						title="Due In"
						writeUp={<span className="text-brand-error">{dueIn} </span>}
					/>
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
				<ColTitleDes
					title="Remind me:"
					writeUp={
						<RemindMeCheckBox checkBoxObj labels={labels} change={onchange} />
					}
				/>
			</div>
		</ModalBase>
	)
}
