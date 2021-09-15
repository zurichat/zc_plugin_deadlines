import React from 'react'
import { useState } from 'react'
const DatePicker = ({ value, uniqueId, onChange }) => {
	const [date, setDate] = useState(value)
	let realDate = value
	const onSelect = (e) => {
		setDate(e.target.value)
		realDate = e.target.value
		onChange(realDate)
	}
	return (
		<>
			<label htmlFor={uniqueId}></label>
			<input
				className="block w-full pb-2 outline-none text-gray-600 border-b-2 border-solid border-gray-400 focus:border-brand-primary"
				id={uniqueId}
				type="date"
				value={date}
				onChange={onSelect}
				required
			/>
		</>
	)
}

export default DatePicker
