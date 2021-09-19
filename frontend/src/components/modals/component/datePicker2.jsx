import React from 'react'
import { useState } from 'react'
const DatePicker = ({ value, uniqueId, onChange, name }) => {
	const [date, setDate] = useState(value)
	const onSelect = (e) => {
		setDate(e.target.value)
		onChange(e.target.value)
	}
	return (
		<>
			<label htmlFor={uniqueId}></label>
			<input
				className="block w-full pb-2 outline-none text-gray-600 border-b-2 border-solid border-gray-400 focus:border-brand-primary"
				id={uniqueId}
				type="date"
				value={date}
				name={name}
				onChange={onSelect}
				required
			/>
		</>
	)
}

export default DatePicker
