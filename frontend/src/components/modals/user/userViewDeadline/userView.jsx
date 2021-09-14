import React from 'react'

import ColTitleDes from '../../component/columnTitleDes'
import RowTitleDes from '../../component/rowTitleDes'
import Avatar from '../../component/avatar'
import RemindMeCheckBox from '../../component/remindMeCheckBox'
import ModalBase from '../../modalBase/index'

export default function UserViewDeadline({
	description,
	startDate,
	dueDate,
	dueIn,
	assignedTo,
	assignee,
	src,
	alt,
	deadlineTitle,
}) {
	let labels = {
		everyday: { label: 'Everyday', checked: false },
		week: { label: 'A week to deadline', checked: true },
		hours24: { label: '24 hours to deadline', checked: false },
		hours12: { label: '12 hours to deadline', checked: true },
		hours2: { label: '2 hours to deadline', checked: false },
	}
	onchange = (labe, isChecked) => {
		console.log(isChecked)
		switch (labe) {
			case 'Everyday':
				labels = {
					...labels,
					everyday: { ...labels.everyday, checked: isChecked },
				}
				break
			case 'A week to deadline':
				labels = { ...labels, week: { ...labels.week, checked: isChecked } }
				break
			case '24 hours to deadline':
				labels = {
					...labels,
					hours24: { ...labels.hours24, checked: isChecked },
				}
				break
			case '12 hours to deadline':
				labels = {
					...labels,
					hours12: { ...labels.hours12, checked: isChecked },
				}
				break
			case '2 hours to deadline':
				labels = { ...labels, hours2: { ...labels.hours2, checked: isChecked } }
				break
		}
		console.log(labels)
	}

	return (
		<ModalBase title={deadlineTitle}>
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
							title={<Avatar src={src} alt={alt} />}
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
