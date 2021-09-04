import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../../index.css'
import './styles/style.css'
import calendarSvg from '../../assets/img/svg/calender.svg'

const DatePicker = () => {
	const [calendarDisplay, setCalendarDisplay] = useState(false)

	const handleCalendarState = () => {
		setCalendarDisplay(!calendarDisplay)
	}

	const currentDate = new Date()
	const [date, setDate] = useState(currentDate) //date is used in calandar

	//day month and year
	const dd = String(date.getDate()).padStart(2, '0')
	const mm = String(date.getMonth() + 1).padStart(2, '0')
	const yyyy = date.getFullYear()

	const readableDate = `${yyyy}-${mm}-${dd}` //formarted date used by date input

	useEffect(() => {
		if (readableDate) {
			setCalendarDisplay(false)
		}
		return
	}, [date])

	return (
		<div className="w-80">
			<div
				className="items-left mb-3 pl-0 cursor-pointer"
				onClick={handleCalendarState}
			>
				<div className="inline-flex rounded-full h-6 w-6 bg-gray-200 m-0">
					<img
						className="flex m-auto self-center"
						src={calendarSvg}
						alt="tiny calender"
					/>
				</div>
				<b className="mr-28"> Start Date </b>
			</div>
			<input
				type="date"
				value={readableDate}
				className="invisible md:visible inline border rounded-md text-gray-400 bg-gray-200 w-60 cursor-pointer"
				onClick={handleCalendarState}
				// onChange={setStartDate}
			/>
			{calendarDisplay ? (
				<Calendar className="absolute" onChange={setDate} value={date} />
			) : null}
		</div>
	)
}

export default DatePicker
