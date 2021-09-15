import React from 'react'
import Checkbox from './checkbox/checkbox'

const RemindMeCheckBox = ({ labels, change }) => {
	const generatedBoxes = labels.map((item, index) => {
		return item.checked ? (
			<li key={index} className="list-none">
				<Checkbox
					id={index}
					label={item.label}
					onChange={(isChecked) => {
						change(index, isChecked)
					}}
					check
				/>
			</li>
		) : (
			<li key={index} className="list-none">
				<Checkbox
					id={index}
					label={item.label}
					onChange={(isChecked) => {
						change(index, isChecked)
					}}
				/>
			</li>
		)
	})

	return <div className="flex flex-col items-start gap-3">{generatedBoxes}</div>
}

export default RemindMeCheckBox
