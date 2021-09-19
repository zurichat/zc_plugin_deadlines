import React, { useEffect } from 'react'

const StatusChanger = ({
	currentStatus,
	setStatus,
	toggler,
	deadlineStatus,
	radioSelect,
	toggleHolder,
}) => {
	const setDeadlineStatus = () => {
		return currentStatus ? 'Completed' : 'Pending'
	}
	useEffect(() => {
		radioSelect.current.checked = currentStatus
		console.log(radioSelect.current.checked)
		deadlineStatus.current.innerText = setDeadlineStatus()
	})
	return (
		<div className="flex ">
			{/* <div
				ref={deadlineStatus}
				className="h-6 w-6 border-black border-2 rounded"
			></div> */}
			<label className="h-6 w-12 mx-3">
				<input
					ref={radioSelect}
					className=" absolute -ml-20 opacity-0"
					type="checkbox"
					onChange={(event) => {
						setStatus({ status: event.target.checked })
						currentStatus
							? (toggler.current.classList.add('ml-5'),
							  (deadlineStatus.current.innerText = 'Deadline Pending'))
							: (toggler.current.classList.remove('ml-5'),
							  (deadlineStatus.current.innerText = 'Deadline Met'))
					}}
				/>
				<div
					ref={toggleHolder}
					className={
						currentStatus
							? 'flex w-9 h-4 mt-1 duration-500 border-2 border-black rounded-full bg-brand-text-leftNav relative'
							: 'flex w-9 h-4 mt-1 duration-500 border-2 border-black rounded-full bg-brand-bg-white relative'
					}
				>
					<div
						ref={toggler}
						className={
							currentStatus
								? 'flex w-3 duration-300 h-3 ml-5 rounded-full bg-brand-success relative'
								: 'flex w-3 duration-300 h-3 rounded-full bg-brand-success relative'
						}
					></div>
				</div>
			</label>
		</div>
	)
}

export default StatusChanger
