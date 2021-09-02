import React from 'react'

const TimerTextBox = () => {
	return (
		<div className="bg-green-300 w-full flex item-baseline my-8 text-base">
			<input
				style={{
					background: '#FBFCFC',
					marginRight: '1rem',
					height: '25.88px',
					padding: '1.5rem 2rem',
					borderRadius: '3.59447px',
					border: '1px solid rgba(153, 153, 153, 0.2)',
				}}
				type="text"
				placeHolder="00:00"
			/>
			<select
				style={{
					color: 'grey',
					background: '#FBFCFC',
					borderRadius: '3.59447px',
					padding: '0 1.3rem',
					border: '1px solid rgba(153, 153, 153, 0.2)',
				}}
				className="p-2 bg-white appearance-none text-gray-300"
				name="time"
			>
				<option value="AM" selected>
					AM
				</option>
				<option value="PM">PM</option>
			</select>
		</div>
	)
}
export default TimerTextBox
