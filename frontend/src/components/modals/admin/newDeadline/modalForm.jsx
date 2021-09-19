import React, { useState } from 'react'
import ColTitleDes from '../../component/columnTitleDes'
import TextField from '../../component/textField'
import DatePicker from '../../component/datePicker2'
import RadioButton from '../../component/radioButton/radioButton'
import Priority from '../../component/priority'
import axios from 'axios'

const ModalForm = ({ closeModal }) => {
	const [deadline, setDeadline] = useState({
		title: '',
		description: '',
		startDate: '',
		dueDate: '',
		assignTo: '',
		option: ['low', 'medium', 'high'],
	})

	const [radio, setRadio] = useState('')

	const handleChange = (event) => {
		setDeadline({ ...deadline, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		axios
			.post('api/reminders.js/useCreateReminder', deadline)
			.then((response) => setDeadline(response.data))
			.error((error) => {
				console.log(error)
			})
	}

	return (
		<div className="flex flex-col gap-y-6">
			<ColTitleDes
				title="Title"
				writeUp={
					<TextField
						placeholder="Deadline Title"
						value={deadline.title}
						onChange={handleChange}
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
					/>
				}
				alignStretch
			/>

			<div className="flex gap-x-12 w-full">
				<ColTitleDes
					space
					title="Start date"
					writeUp={
						<DatePicker value={deadline.startDate} onChange={handleChange} />
					}
					alignStretch
				/>
				<ColTitleDes
					space
					title="Due date:"
					writeUp={
						<DatePicker value={deadline.dueDate} onChange={handleChange} />
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
					/>
				}
				alignStretch
			/>
			<div className="flex flex-col gap-y-3">
				<p className="text-sm leading-none">Select priority</p>
				<RadioButton
					id="low"
					selected={radio}
					label={<Priority status="low" />}
					onChange={() => {
						deadline.option = 'low'
						setRadio('low')
					}}
				/>
				<RadioButton
					id="medium"
					selected={radio}
					label={<Priority status="medium" />}
					onChange={() => {
						deadline.option = 'medium'
						setRadio('medium')
					}}
				/>
				<RadioButton
					id="high"
					selected={radio}
					label={<Priority status="high" />}
					onChange={() => {
						deadline.option = 'high'
						setRadio('high')
					}}
				/>
			</div>
			<div className="flex justify-end">
				<button
					className="w-16 h-10  text-sm text-brand-primary font-semibold"
					onClick={closeModal}
				>
					Cancel
				</button>
				<button
					className="w-16 h-10  text-sm bg-brand-primary font-semibold text-brand-bg-white"
					onSubmit={handleSubmit}
				>
					Create
				</button>
			</div>
		</div>
	)
}

export default ModalForm
