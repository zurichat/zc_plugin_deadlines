import React from 'react'
import style from './checkbox.module.css'

const Checkbox = ({ id, label, check, onChange }) => {
	const change = ({ target: { checked } }) => {
		const check = checked
		onChange(check)
	}
	return (
		<div className="flex justify-start gap-x-2">
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
					onChange={onChange}
				/>
			)}
			<div className="inline-block h-5 w-5 border-solid border border-black p-px">
				<div className={`${style.interior} bg-brand-primary h-full`}></div>
			</div>
			<label htmlFor={id} className="text-sm leading-none self-center">
				{label}
			</label>
		</div>
	)
}

//this is how to call it the id should be unique
//<Checkbox id="unique" label="label name" check onChange={(booleanOfIfChecked) => {}} />

export default Checkbox
