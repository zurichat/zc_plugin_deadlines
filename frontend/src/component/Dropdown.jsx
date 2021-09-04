import React from 'react'

const Dropdown = (props) => {
	return (
		<div>
			<select className="w-80 border-b-2 border-solid border-gray-200 h-16 outline-none py-0 px-2">
				<option value="null">Select an assigne</option>
				{props.assignes.map((assigne) => (
					<option key={assigne.id} value={assigne.assigne_name}>
						{assigne.assigne_name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Dropdown
