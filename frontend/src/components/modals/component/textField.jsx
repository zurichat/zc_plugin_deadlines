import React, { useState } from 'react'

const TextField = ({ placeholder, value, onChange, name }) => {
	let textValue = value
	const [val, setTextValue] = useState(textValue)
	const textChange = (e) => {
		textValue = e.target.value
		setTextValue(textValue)
		onChange(e)
	}
	return (
		<input
			type="text"
			className="dtw-block dtw-w-full dtw-pb-2 dtw-outline-none dtw-text-gray-600 dtw-border-b-2 dtw-border-solid dtw-border-gray-400 focus:dtw-border-brand-primary"
			required
			placeholder={placeholder}
			value={val}
			onChange={textChange}
			name={name}
		/>
	)
}

export default TextField
