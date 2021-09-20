import React from 'react'

const TextArea = ({ value, onChange, ...props }) => {
	return (
		<div>
			<label className="dtw-text-sm dtw-font-bold dtw-mb-1 dtw-block dtw-text-left">
				Description
			</label>
			<textarea
				value={value}
				onChange={onChange}
				{...props}
				className="dtw-w-full dtw-max-h-44 dtw-p-4 dtw-text-base dtw-block dtw-bg-lightGrey"
			/>
		</div>
	)
}

export default TextArea
