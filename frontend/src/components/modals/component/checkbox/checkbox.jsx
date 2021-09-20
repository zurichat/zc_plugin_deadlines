import React from 'react'
import style from './checkbox.module.css'

const Checkbox = ({ id, label, check, onChange }) => {
	const change = ({ target: { checked } }) => {
		onChange(checked)
	}
	return (
		<div className="dtw-flex dtw-justify-start dtw-gap-x-2">
			{check ? (
				<input
					type="checkbox"
					id={id}
					className={`${style.checkbox} hidden`}
					onChange={change}
					defaultChecked
				/>
			) : (
				<input
					type="checkbox"
					id={id}
					className={`${style.checkbox} hidden`}
					onChange={change}
				/>
			)}
			<label
				htmlFor={id}
				className="dtw-text-sm dtw-cursor-pointer dtw-leading-none dtw-self-center dtw-flex dtw-items-center dtw-gap-x-2"
			>
				<div className="dtw-inline-block dtw-h-5 dtw-w-5 dtw-border-solid dtw-border dtw-border-black dtw-p-px">
					<div className={`${style.interior} bg-brand-primary h-full`}></div>
				</div>

				{label}
			</label>
		</div>
	)
}

//this is how to call it the id should be unique
//<Checkbox id="unique" label="label name" check onChange={(booleanOfIfChecked) => {}} />

export default Checkbox
