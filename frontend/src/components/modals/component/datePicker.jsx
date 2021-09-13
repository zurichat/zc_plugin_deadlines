import React from 'react'
import { useState } from 'react'
const datePicker = ({ initialValue, uniqueId }) => {
	const [date, setDate] = useState(initialValue)
	let realDate = initialValue
	const onSelect = (e) => {
		setDate(e.target.value)
		realDate = e.target.value
		console.log(realDate)
		setTimeout(() => {
			console.log(realDate)
			console.log(date)
		}, 2000)
	}
	return (
		<>
			<label htmlFor={uniqueId}>start date : </label>
			<input
				className="block w-1/2 pb-2 outline-none text-gray-600 border-b-2 border-solid border-gray-400 focus:border-brand-primary"
				id={uniqueId}
				type="date"
				value={date}
				onChange={onSelect}
				required
			/>
		</>
	)
}

export default datePicker
