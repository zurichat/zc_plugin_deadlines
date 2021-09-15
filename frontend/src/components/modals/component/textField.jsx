import React, { useState } from 'react'

const TextField = ({ placeholder, value, onChange }) => {
	let textValue = value
	const [val, setTextValue] = useState(textValue)
	const textChange = (e) => {
		textValue = e.target.value
		setTextValue(textValue)
		onChange(textValue)
	}
	return (
		<input
			type="text"
			className="block w-full pb-2 outline-none text-gray-600 border-b-2 border-solid border-gray-400 focus:border-brand-primary"
			required
			placeholder={placeholder}
			value={val}
			onChange={textChange}
		/>
	)
}

export default TextField
