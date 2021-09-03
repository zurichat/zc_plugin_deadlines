import React from 'react'

const selectStyle = {
	width: '300px',
	borderBottom: '1px solid gray',
	height: '48px',
	outline: 'unset',
	padding: '0 20px',
}

const Dropdown = () => {
	return (
		<div>
			<select style={selectStyle}>
				<option selected value="null">
					Select an assigne
				</option>
				<option>Assigne 1</option>
				<option>Assigne 2</option>
				<option>Assigne 3</option>
				<option>Assigne 4</option>
			</select>
		</div>
	)
}

export default Dropdown
