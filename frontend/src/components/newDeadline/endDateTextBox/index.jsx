import React from 'react'

const EndDateTextBox = () => {
	return (
		<div className="EndDateTextBox">
			<form action="#">
				<input
					type="text"
					name="startDate"
					id="startDate"
					placeholder="DD   /    MM     /   YY"
					className="px-3 py-2 bg-gray-200 border-none outline-none text-center border-box rounded"
				/>
			</form>
		</div>
	)
}
export default EndDateTextBox
