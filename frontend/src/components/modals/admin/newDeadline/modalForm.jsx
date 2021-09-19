import React, { useState } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import TextField from '../../component/textField'
import DatePicker from '../../component/datePicker2'
import RadioButton from '../../component/radioButton/radioButton'
import Priority from '../../component/priority'
import { useCreateDeadline } from '../../../../api/reminders'

const ModalForm = ({ closeModal }) => {
	const mutation = useCreateDeadline()
	const [deadline, setDeadline] = useState({
		title: '',
		description: '',
		startDate: '',
		dueDate: '',
		assignTo: '',
	})

	const [radio, setRadio] = useState('')

	const handleChange = (event) => {
		setDeadline({ ...deadline, [event.target.name]: event.target.value })
	}

	const handleSubmit = () => {
		const otherData = {
			assignee: {
				channelId: '414057c561sd354656af34b4dt',
				channelLink: 'https://google.com',
				channelName: deadline.assignTo,
			},
			creator: {
				userId: '414057c561sd354656af34b4dt',
				userLink: 'https://google.com',
				userName: 'Joe',
			},
			priority: radio,
			shouldRemind: false,
			status: 'pending',
			reminders: [],
		}

		const payload = { ...otherData, ...deadline }
		// console.log(payload)
		mutation.mutate(payload)
		closeModal()
	}

	return (
		<div className="dtw-flex dtw-flex-col dtw-gap-y-6">
			<ColTitleDes
				title="Title"
				writeUp={
					<TextField
						placeholder="Deadline Title"
						value={deadline.title}
						onChange={handleChange}
						name="title"
					/>
				}
				alignStretch
			/>

			<ColTitleDes
				title="Description"
				writeUp={
					<TextField
						placeholder="Deadline Description"
						value={deadline.description}
						onChange={handleChange}
						name="description"
					/>
				}
				alignStretch
			/>

			<div className="dtw-flex dtw-gap-x-12 dtw-w-full">
				<ColTitleDes
					space
					title="Start date"
					writeUp={
						<DatePicker
							value={deadline.startDate}
							name="startDate"
							onChange={handleChange}
						/>
					}
					alignStretch
				/>
				<ColTitleDes
					space
					title="Due date:"
					writeUp={
						<DatePicker
							value={deadline.dueDate}
							name="dueDate"
							onChange={handleChange}
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
						value={deadline.assignTo}
						onChange={handleChange}
						name="assignTo"
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
						setRadio('low')
					}}
				/>
				<RadioButton
					id="medium"
					selected={radio}
					label={<Priority status="medium" />}
					onChange={() => {
						setRadio('medium')
					}}
				/>
				<RadioButton
					id="high"
					selected={radio}
					label={<Priority status="high" />}
					onChange={() => {
						setRadio('high')
					}}
				/>
			</div>
			<div className="dtw-flex dtw-justify-end">
				<button
					className="w-16 dtw-h-10  dtw-text-sm dtw-text-brand-primary font-semibold"
					onClick={closeModal}
				>
					Cancel
				</button>
				<button
					className="dtw-dtw-dtw-dtw-w-16 dtw-h-10  dtw-text-sm dtw-bg-brand-primary dtw-dtw-dtw-dtw-font-semibold dtw-text-brand-bg-white"
					onClick={handleSubmit}
				>
					Create
				</button>
			</div>
		</div>
	)
}

export default ModalForm
