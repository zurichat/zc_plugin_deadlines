import React from 'react'
import style from './radio.module.css'

const RadioButton = ({ id, label, selected, onChange }) => {
	return (
		<div className="dtw-flex dtw-justify-start">
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
				className="dtw-text-sm dtw-cursor-pointer dtw-leading-none dtw-self-center dtw-flex dtw-items-center dtw-gap-x-2"
			>
				<div className="dtw-inline-block dtw-h-4 dtw-w-4 dtw-rounded-1/2 dtw-border-solid dtw-border dtw-border-black dtw-p-px">
					<div
						className={`${style.interior} dtw-rounded-1/2 bg-brand-primary h-full`}
					></div>
				</div>

				{label}
			</label>
		</div>
	)
}

export default RadioButton
