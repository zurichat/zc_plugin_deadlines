import React from 'react'
import { useState } from 'react'
const DatePicker = ({ value, uniqueId, onChange, name }) => {
	const [date, setDate] = useState(value)
	const onSelect = (e) => {
		setDate(e.target.value)
		onChange(e)
	}
	return (
		<>
			<label htmlFor={uniqueId}></label>
			<input
				className="dtw-block dtw-w-full dtw-pb-2 dtw-outline-none dtw-text-gray-600 dtw-border-b-2 dtw-border-solid dtw-border-gray-400 focus:dtw-border-brand-primary"
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
