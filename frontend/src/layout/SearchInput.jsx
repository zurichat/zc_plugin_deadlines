import {React, useState} from 'react'

const Searchinput = () => {
	const [input, setInput] = useState('')
	const handleInput = (e) => {
    setInput(e.target.value);
	}

	return (
		<div>
			<input
				className="shadow appearance-none border rounded w-half py-2 px-5 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
				placeholder="Search" type="text" value={input} onChange={handleInput}
			/>
		</div>
	)
}
export default Searchinput
