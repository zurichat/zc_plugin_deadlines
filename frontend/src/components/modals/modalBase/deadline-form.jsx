import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import CalenderIcon from './calender.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DeadlineForm = () => {
	const assignees = [
		{ id: 1, assignee_name: 'Godswill' },
		{ id: 2, assignee_name: 'Jumoke' },
		{ id: 3, assignee_name: 'Olabosun' },
		{ id: 4, assignee_name: 'Mike' },
		{ id: 5, assignee_name: 'Andrew' },
	]

	const [startDate, setStartDate] = useState(null)
	const [endDate, setEndDate] = useState(null)

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
		setValue,
	} = useForm()

	const handleStartDateChange = (startDate) => {
		setValue('startDate', startDate)
		setStartDate(startDate)
	}

	const handleEndDateChange = (endDate) => {
		setValue('endDate', endDate)
		setEndDate(endDate)
	}

	const filterPassedTime = (dateWithTimeSelected) => {
		const currentDate = new Date()
		const selectedDate = new Date(dateWithTimeSelected)

		return currentDate.getTime() < selectedDate.getTime()
	}

	const filterPassedTimeEndDate = (dateWithTimeSelected) => {
		const currentDate = new Date(startDate)
		const selectedDate = new Date(dateWithTimeSelected)

		return currentDate.getTime() < selectedDate.getTime()
	}

	const onSubmit = (data) => {
		console.log(data)
		setStartDate(null)
		setEndDate(null)
		reset()
		alert('Form submitted successfully')
	}

	useEffect(() => {
		register('startDate')
		register('endDate')
		reset()
	}, [register, reset])

	return (
		<form
			className="w-full m-auto flex flex-col text-xs sm:text-sm"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="w-full mt-4">
				<label htmlFor="title" className="block font-semibold">
					Title
				</label>
				<input
					{...register('title', {
						required: true,
						minLength: 10,
						maxLength: 70,
					})}
					name="title"
					type="text"
					placeholder="E.g. UI Design Submission"
					className="border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-5 "
				/>
				{errors.title && errors.title.type === 'required' && (
					<span role="alert" className="text-xs text-brand-error">
						Title is required
					</span>
				)}
				{errors.title && errors.title.type === 'minLength' && (
					<span role="alert" className="text-xs text-brand-error">
						Min length specification not met
					</span>
				)}
				{errors.title && errors.title.type === 'maxLength' && (
					<span role="alert" className="text-xs text-brand-error">
						Max length exceeded
					</span>
				)}
			</div>

			<div className="w-full mt-4">
				<label htmlFor="description" className="block font-semibold">
					Description
				</label>
				<input
					{...register('description', {
						required: true,
						minLength: 10,
						maxLength: 70,
					})}
					name="description"
					type="text"
					placeholder="Describe the deadline"
					className="border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-5 "
				/>
				{errors.description && errors.description.type === 'required' && (
					<span role="alert" className="text-xs text-brand-error">
						Description is required
					</span>
				)}
				{errors.description && errors.description.type === 'minLength' && (
					<span role="alert" className="text-xs text-brand-error">
						Min length specification not met
					</span>
				)}
			</div>

			<div className="w-full flex flex-col sm:flex-row justify-between items-end mt-4">
				<div className="w-full sm:w-3/7">
					<label className="flex items-center font-semibold">
						<h3>Start Date</h3>
					</label>
					<div className="flex flex-row items-end">
						<Controller
							rules={{ required: true }}
							name="startDate"
							control={control}
							render={() => (
								<DatePicker
									selected={startDate}
									onChange={handleStartDateChange}
									showTimeSelect
									filterTime={filterPassedTime}
									minDate={new Date()}
									showDisabledMonthNavigation
									dateFormat="d MMM yyyy h:mm aa"
									placeholderText="DD/MM/YY"
									className="border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-5 "
								/>
							)}
						/>
						<img
							src={CalenderIcon}
							className="w-5 h-5 sm:w-7 sm:h-7 -ml-7 mb-2.5 z-10"
							alt="calender-icon"
						/>
					</div>

					{errors.startDate && errors.startDate.type === 'required' && (
						<span role="alert" className="text-xs text-brand-error">
							Pick a start date
						</span>
					)}
				</div>

				<div className="w-full mt-4 sm:mt-0 sm:w-3/7">
					<label className="flex items-center font-semibold">
						<h3>Due Date</h3>
					</label>
					<div className="flex flex-row items-end">
						<Controller
							rules={{ required: true }}
							name="endDate"
							control={control}
							render={() => (
								<DatePicker
									selected={endDate}
									onChange={handleEndDateChange}
									showTimeSelect
									filterTime={filterPassedTimeEndDate}
									minDate={startDate}
									showDisabledMonthNavigation
									dateFormat="d MMM yyyy h:mm aa"
									placeholderText="DD/MM/YY"
									className=" border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-5 "
								/>
							)}
						/>
						<img
							src={CalenderIcon}
							className="w-5 h-5 sm:w-7 sm:h-7 -ml-7 mb-2.5 z-10"
							alt="calender-icon"
						/>
					</div>

					{errors.endDate && errors.endDate.type === 'required' && (
						<span role="alert" className="text-xs text-brand-error">
							Pick an end date
						</span>
					)}
				</div>
			</div>

			<div className="w-full mt-4 mb-7">
				<div>
					<label htmlFor="Assigne to" className="block font-semibold">
						Assign to
					</label>
					<select
						className="w-full border-b border-solid border-gray-200 outline-none appearance-none h-10"
						name="assignees"
						{...register('assignees', {
							required: true,
						})}
					>
						<option value=""></option>
						{assignees.map((assignee) => (
							<option key={assignee.id} value={assignee.assignee_name}>
								{assignee.assignee_name}
							</option>
						))}
					</select>
					{errors.assignees && errors.assignees.type === 'required' && (
						<span role="alert" className="text-xs text-brand-error">
							Choose an assignee
						</span>
					)}
				</div>
			</div>

			<div className="flex flex-col space-y-3 font-medium">
				<h3>Select priority</h3>
				<div className="flex flex-row-reverse items-center mr-auto">
					<span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-200 ml-2.5 sm:mt-1"></span>
					<label>Low</label>
					<input
						name="priority"
						type="radio"
						value="low"
						{...register('priority', { required: true })}
						className="w-4 h-4 mr-2.5"
					/>
				</div>
				<div className="flex flex-row-reverse items-center mr-auto">
					<span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500 ml-2.5 sm:mt-1"></span>
					<label>Medium</label>
					<input
						name="priority"
						type="radio"
						value="medium"
						{...register('priority', { required: true })}
						className="w-4 h-4 mr-2.5"
					/>
				</div>
				<div className="flex flex-row-reverse items-center mr-auto">
					<span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-error ml-2.5 sm:mt-1"></span>
					<label>High</label>
					<input
						name="priority"
						type="radio"
						value="high"
						{...register('priority', { required: true })}
						className="w-4 h-4 mr-2.5"
					/>
				</div>
				{errors.priority && errors.priority.type === 'required' && (
					<span role="alert" className="text-xs font-normal text-brand-error">
						Select priority
					</span>
				)}
			</div>

			<div className="flex items-baseline mt-8 mb-6 font-semibold sm:text-base">
				<button className=" ml-auto text-brand-primary p-2 sm:py-2 sm:px-6">
					Cancel
				</button>
				<button className="bg-brand-primary text-brand-bg-white ml-2 sm:ml-0 px-3 py-1 sm:py-3 sm:px-6 rounded">
					Create
				</button>
			</div>
		</form>
	)
}

export default DeadlineForm
