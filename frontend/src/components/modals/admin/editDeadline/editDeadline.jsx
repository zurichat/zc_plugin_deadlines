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
import { useAllReminders, useUpdateReminders } from '../../../../api/reminders'

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
			creator,
			priority,
			reminders,
			shouldRemind,
			status,
		},
	] = fetchedData.filter((deadline) => {
		return deadline.object_id === object_id
	})
	const startDateStr = DateTime.fromISO(startDate, {
		zone: 'UTC',
	})

	const dueDateStr = DateTime.fromISO(dueDate, {
		zone: 'UTC',
	})
	const [data, setData] = useState({
		description,
		title,
		start: startDateStr,
		due: dueDateStr,
		assignTo: assignee.channelName,
		radio: priority,
	})

	const [radio, setRadio] = useState(priority)
	const { modalData, setModalData } = useContext(ModalContext)
	const closeModal = () => setModalData({ ...modalData, modalShow: false })

	const update = () => {
		const payload = {
			assignee: { ...assignee, channelName: data.assignTo },
			creator: { ...creator },
			object_id,
			priority: data.radio,
			title: data.title,
			description: data.description,
			reminders,
			shouldRemind,
			startDate: data.start.toISO(),
			dueDate: data.due.toISO(),
			status,
		}
		mutation.mutate({ object_id, payload })
		closeModal()
	}

	return (
		<ModalBase title="Edit Deadline">
			<div className="flex flex-col gap-y-6">
				<ColTitleDes
					title="Title"
					writeUp={
						<TextField
							placeholder="Deadline Title"
							value={data.title}
							onChange={(e) => {
								setData({ ...data, title: e.target.value })
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
							onChange={(e) => {
								setData({ ...data, description: e.target.value })
							}}
						/>
					}
					alignStretch
				/>

				<div className="flex flex-col gap-y-6 w-full md:gap-x-12 md:flex-row">
					<ColTitleDes
						space
						title="Start date"
						writeUp={
							<DatePicker
								value={`${data.start.year}-${`0${data.start.month}`.slice(
									-2
								)}-${`0${data.start.month}`.slice(-2)}`}
								onChange={(e) => {
									setData({
										...data,
										start: DateTime.fromSQL(e.target.value),
									})
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
								value={`${data.due.year}-${`0${data.due.month}`.slice(
									-2
								)}-${`0${data.due.day}`.slice(-2)}`}
								onChange={(e) => {
									setData({
										...data,
										due: DateTime.fromSQL(e.target.value),
									})
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
							onChange={(e) => {
								setData({ ...data, assignTo: e.target.value })
							}}
						/>
					}
					alignStretch
				/>
				<div className="flex flex-col gap-y-3">
					<p className="text-sm leading-none">select priority</p>
					<RadioButton
						id="low"
						selected={radio}
						label={<Priority status="low" />}
						onChange={() => {
							setData({ ...data, radio: 'low' })
							setRadio('low')
						}}
					/>
					<RadioButton
						id="medium"
						selected={radio}
						label={<Priority status="medium" />}
						onChange={() => {
							setData({ ...data, radio: 'medium' })
							setRadio('medium')
						}}
					/>
					<RadioButton
						id="high"
						selected={radio}
						label={<Priority status="high" />}
						onChange={() => {
							setData({ ...data, radio: 'high' })
							setRadio('high')
						}}
					/>
				</div>
				<ModalButton
					actionName="Update"
					actionFunc={update}
					cancelFunc={closeModal}
				/>
			</div>
		</ModalBase>
	)
}

export default EditDeadline
