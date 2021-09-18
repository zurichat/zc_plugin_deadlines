import React from 'react'
import style from './radio.module.css'

const RadioButton = ({ id, label, selected, onChange }) => {
	return (
		<div className="flex justify-start">
			{
				<input
					type="radio"
					id={id}
					className={`${style.checkbox} hidden`}
					onChange={onChange}
					name="setPriority"
					checked={selected.toLowerCase() === id.toLowerCase()}
				/>
			}
			<label
				htmlFor={id}
				className="text-sm cursor-pointer leading-none self-center flex items-center gap-x-2"
			>
				<div className="inline-block h-4 w-4 rounded-1/2 border-solid border border-black p-px">
					<div
						className={`${style.interior} rounded-1/2 bg-brand-primary h-full`}
					></div>
				</div>

				{label}
			</label>
		</div>
	)
}

export default RadioButton
