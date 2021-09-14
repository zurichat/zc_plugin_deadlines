import React from 'react'
import Checkbox from './checkbox/checkbox'

const RemindMeCheckBox = ({ labels, change }) => {
	const generatedBoxes = Object.keys(labels).map((item, index) => {
		console.log(labels[item].checked)
		return labels[item].checked ? (
			<li key={index} className="list-none">
				<Checkbox
					id={index}
					label={labels[item].label}
					onChange={(isChecked) => {
						change(labels[item].label, isChecked)
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
						change(item, isChecked)
					}}
				/>
			</li>
		)
	})

	return <div className="flex flex-col items-start gap-3">{generatedBoxes}</div>
}

export default RemindMeCheckBox
