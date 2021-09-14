import React from 'react'

const TextField = ({ placeholder, initialValue }) => {
	let textValue = initialValue
	const textChange = (e) => {
		textValue = e.target.value
		console.log(textValue)
	}
	return (
		<input
			type="text"
			className="block w-full pb-2 outline-none text-gray-600 border-b-2 border-solid border-gray-400 focus:border-brand-primary"
			required
			placeholder={placeholder}
			value={initialValue}
			onChange={textChange}
		/>
	)
}

export default TextField
