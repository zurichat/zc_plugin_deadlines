import React from 'react'
import Checkbox from './checkbox/checkbox'

const RemindMeCheckBox = ({ labels, change }) => {
	const generatedBoxes = labels.map((item, index) => {
		return (
			<li key={index} className="list-none">
				<Checkbox
					id={index}
					label={item}
					onChange={(isChecked) => {
						change(item, isChecked)
					}}
				/>
			</li>
		)
	})

	return <div className="flex flex-col items-start gap-3">{generatedBoxes}</div>
}

export default RemindMeCheckBox
