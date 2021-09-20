import React, { useState, useContext } from 'react'
import { DateTime } from 'luxon'

import ColTitleDes from '../../component/columnTitleDes'
import TextField from '../../component/textField'
import DatePicker from '../../component/datePicker2'
import RadioButton from '../../component/radioButton/radioButton'
import Priority from '../../component/priority'
import ModalBase from '../../modalBase/index'
import ModalButton from '../../component/button'
import { ModalContext } from '../../../../context/ModalContext'
import { useAllReminders } from '../../../../api/reminders'
import { useUpdateReminders } from '../../../../api/reminders'

// import ModalButton from '../../component/button'

// prop value format= {
// 	title: 'fuck',
// 	description: 'locuebcif efifhbvsfdi srivfbskbvdib  ivab',
// 	start: '2021-11-03',
// 	due: '2021-11-09',
// 	radio: 'high',
//  assignTo: "#marketing"
// }
const EditDeadline = ({ object_id }) => {
	const { fetchedData } = useAllReminders()
	const mutation = useUpdateReminders()

	const [
		{
			assignee,
			description,
			dueDate,
			startDate,
			title,
			// creator,
			priority,
			// reminders,
			// shouldRemind,
			// staus,
		},
	] = fetchedData.filter((deadline) => deadline.object_id === object_id)
	const startDateStr = DateTime.fromISO(startDate, {
		zone: 'UTC',
	})

	const dueDateStr = DateTime.fromISO(dueDate, {
		zone: 'UTC',
	})

	let data = {
		description,
		title,
		start: startDateStr,
		due: dueDateStr,
		assignTo: assignee.channelName,
		radio: priority,
	} //should receive initial data from props

	const [radio, setRadio] = useState(priority)
	const { modalData, setModalData } = useContext(ModalContext)
	const closeModal = () => setModalData({ ...modalData, modalShow: false })
	const payload = {
		title: data.title,
		description: data.description,
		startDate: data.start,
		dueDate: data.due,
		assignee: data.assignTo,
	}
	const updateReminders = () => {
		mutation(payload, object_id)
	}
	return (
		<ModalBase title="Edit Deadline">
			<div className="dtw-flex dtw-flex-col dtw-gap-y-6">
				<ColTitleDes
					title="Title"
					writeUp={
						<TextField
							placeholder="Deadline Title"
							value={data.title}
							onChange={(value) => {
								data = { ...data, title: value }
							}}
						/>
					}
					alignStretch
				/>

				<ColTitleDes
					title="Description"
					writeUp={
						<TextField
							placeholder="Deadline Description"
							value={data.description}
							onChange={(value) => {
								data = { ...data, description: value }
							}}
						/>
					}
					alignStretch
				/>

				<div className="dtw-flex dtw-flex-col dtw-gap-y-6 dtw-full md:dtw-gap-x-12 md:dtw-flex-row">
					<ColTitleDes
						space
						title="Start date"
						writeUp={
							<DatePicker
								value={`${data.start.year}-${`0${data.start.month}`.slice(
									-2
								)}-${data.start.day}`}
								onChange={(value) => {
									data = {
										...data,
										start: DateTime.fromSQL(value),
									}
								}}
							/>
						}
						alignStretch
					/>
					<ColTitleDes
						space
						title="Due date:"
						writeUp={
							<DatePicker
								value={`${data.due.year}-${`0${data.due.month}`.slice(-2)}-${
									data.due.day
								}`}
								onChange={(value) => {
									data = {
										...data,
										due: DateTime.fromSQL(value),
									}
								}}
							/>
						}
						alignStretch
					/>
				</div>
				<ColTitleDes
					title="Assign to"
					writeUp={
						<TextField
							placeholder="E.g. #channelName"
							value={data.assignTo}
							onChange={(value) => {
								data = { ...data, assignTo: value }
							}}
						/>
					}
					alignStretch
				/>
				<div className="dtw-flex dtw-flex-col dtw-gap-y-3">
					<p className="dtw-text-sm dtw-leading-none">Select priority</p>
					<RadioButton
						id="low"
						selected={radio}
						label={<Priority status="low" />}
						onChange={() => {
							data.radio = 'low'
							setRadio('low')
						}}
					/>
					<RadioButton
						id="medium"
						selected={radio}
						label={<Priority status="medium" />}
						onChange={() => {
							data.radio = 'medium'
							setRadio('medium')
						}}
					/>
					<RadioButton
						id="high"
						selected={radio}
						label={<Priority status="high" />}
						onChange={() => {
							data.radio = 'high'
							setRadio('high')
						}}
					/>
				</div>
				<ModalButton
					actionName="Update"
					actionFunc={() => {}}
					cancelFunc={closeModal}
				/>
			</div>
		</ModalBase>
	)
}

export default EditDeadline
