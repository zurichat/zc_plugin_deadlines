import React from 'react'
import ColTitleDes from '../component/columnTitleDes'
import RowTitleDes from '../component/rowTitleDes'
import Avatar from '../component/avatar'
import RemindMeCheckBox from '../component/remindMeCheckBox'
export default function UserViewDeadline({
	description,
	startDate,
	dueDate,
	dueIn,
	assignedTo,
	assignee,
	src,
	alt,
}) {
	let checkBoxObj = {
		everyDay: false,
		week: false,
		hours24: false,
		hours12: false,
		hours2: false,
	}
	onchange = (labe, isChecked) => {
		switch (labe) {
			case 'Everyday':
				checkBoxObj = { ...checkBoxObj, everyDay: isChecked }
				break
			case 'A week to deadline':
				checkBoxObj = { ...checkBoxObj, week: isChecked }
				break
			case '24 hours to deadline':
				checkBoxObj = { ...checkBoxObj, hours24: isChecked }
				break
			case '12 hours to deadline':
				checkBoxObj = { ...checkBoxObj, hours12: isChecked }
				break
			case '2 hours to deadline':
				checkBoxObj = { ...checkBoxObj, hours2: isChecked }
				break
		}
		console.log(checkBoxObj)
	}

	const labels = [
		'Everyday',
		'A week to deadline',
		'24 hours to deadline',
		'12 hours to deadline',
		'2 hours to deadline',
	]

	return (
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
				writeUp={<RemindMeCheckBox labels={labels} change={onchange} />}
			/>
		</div>
	)
}
