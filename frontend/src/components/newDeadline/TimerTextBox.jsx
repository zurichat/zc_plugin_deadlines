import React from 'react'

const TimerTextBox = () => {
	return (
		<div className="w-full flex item-baseline my-8 text-base">
			<input
				className="w-1/2 bg-brand-bg-lightGrey rounded border-2 px-5 m-2 h-11 text-brand-text-lightIcon"
				type="time"
				defaultValue="00:00"
				// placeHolder="00:00"
			/>
		</div>
	)
}
export default TimerTextBox
