import React, { useState, useEffect } from 'react'
import CalenderIcon from '../../assets/img/svg/calender.svg'
// import Remaining from '../../assets/img/svg/remaining.svg'
import UserIcon from '../../assets/img/png/users.png'
// import Dropdown from './Dropdown'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ModalForm = () => {
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
	}, [register])

	return (
		<form className="grid grid-cols-5" onSubmit={handleSubmit(onSubmit)}>
			<div className="col-span-5 sm:col-span-3 sm:border-r border-brand-text-time text-left sm:rounded-bl-lg">
				<div className="sm:px-6">
					<div className="w-full mt-2">
						<label htmlFor="title" className="block text-lg font-semibold">
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
							className="text-sm border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-3 "
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
						<label
							htmlFor="description"
							className="block text-base font-semibold mb-1"
						>
							Description
						</label>
						<textarea
							{...register('description', {
								required: true,
								minLength: 100,
							})}
							name="description"
							type="text"
							className="text-sm bg-gray-50 rounded-lg w-full h-24 sm:h-40 outline-none "
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

					<div className="w-full mt-3 mb-7">
						{/* <Dropdown /> */}
						<div>
							<label
								htmlFor="Assigne to"
								className="block text-base font-semibold mb-1"
							>
								Assigne to
							</label>
							<select
								className="w-full border-b border-solid border-gray-200 outline-none py-0 px-0"
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

					<div className="hidden sm:flex items-baseline mt-8 mb-6 text-base">
						<button className=" bg-brand-primary text-brand-bg-white p-2 sm:py-2 sm:px-6 rounded">
							Set Deadline
						</button>
					</div>
				</div>
			</div>

			<div className="col-span-5 sm:col-start-4 sm:col-end-6 rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg">
				<div className="w-full flex flex-col mt-1 text-left sm:px-6">
					<div className="w-full sm:mt-2 ">
						<label className="flex items-center text-sm sm:mb-2.5 font-semibold">
							<span className="h-7 p-1.5 bg-brand-avatar-blue bg-opacity-25 rounded-full flex justify-center mr-1">
								<img src={CalenderIcon} alt="calender-icon" />
							</span>
							<h3>Start Date</h3>
						</label>
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
									dateFormat="dd/MM/yyyy h:mm aa"
									placeholderText="DD/MM/YYYY"
									className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
								/>
							)}
						/>
						{errors.startDate && errors.startDate.type === 'required' && (
							<span role="alert" className="text-xs text-brand-error">
								Pick a start date
							</span>
						)}
					</div>

					<div className="w-full mt-4">
						<label className="flex items-center text-sm sm:my-2.5 font-semibold">
							<span className="h-7 p-1.5 bg-brand-avatar-blue bg-opacity-50 rounded-full flex justify-center mr-1">
								<img src={CalenderIcon} alt="calender-icon" />
							</span>
							<h3>Due Date</h3>
						</label>
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
									dateFormat="dd/MM/yyyy h:mm aa"
									placeholderText="DD/MM/YYYY"
									className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
								/>
							)}
						/>
						{errors.endDate && errors.endDate.type === 'required' && (
							<span role="alert" className="text-xs text-brand-error">
								Pick an end date
							</span>
						)}
					</div>

					{/* <div className="w-full mt-4">
						<label className="flex items-center text-sm sm:my-2.5 font-semibold">
							<span className="h-7 p-1 bg-brand-avatar-green bg-opacity-25 rounded-full flex justify-center mr-1">
								<img src={Remaining} alt="time-icon" />
							</span>
							<h3>Time</h3>
						</label>
						<input
							type="time"
							placeholder=""
							className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
						></input>
					</div> */}

					<div className="hidden sm:block mt-6">
						<h3 className="block text-base font-semibold"> Assigned</h3>
						<div className="flex mt-2">
							<img src={UserIcon} alt="users" className="w-16 h-10" />
							<img src={UserIcon} alt="users" className="w-16 h-10 -ml-7" />
						</div>
					</div>

					<div className="flex sm:hidden items-baseline mt-8 sm:my-8 text-base">
						<button className=" bg-brand-primary text-brand-bg-white p-2 sm:py-2 sm:px-6 rounded">
							Set Deadline
						</button>
					</div>
				</div>
			</div>
		</form>
	)
}

export default ModalForm
