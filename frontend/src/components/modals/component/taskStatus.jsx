import React, { useEffect } from 'react'

import { useUpdateReminders } from '../../../api/reminders'

const StatusChanger = ({
	currentStatus,
	setStatus,
	toggler,
	deadlineStatus,
	radioSelect,
	toggleHolder,
	taskId,
}) => {
	const setDeadlineStatus = () => {
		return currentStatus ? 'Completed' : 'Pending'
	}
	const mutation = useUpdateReminders()
	useEffect(() => {
		radioSelect.current.checked = currentStatus
		deadlineStatus.current.innerText = setDeadlineStatus()
	})

	return (
		<div className="flex ">
			<label className="h-6 w-12 mx-3 cursor-pointer">
				<input
					ref={radioSelect}
					className=" absolute -ml-20 opacity-0"
					type="checkbox"
					onChange={(event) => {
						// debugger
						setStatus({ status: event.target.checked })
						currentStatus
							? toggler.current.classList.add('ml-2')
							: toggler.current.classList.remove('ml-2')
						mutation.mutate({
							payload: setDeadlineStatus(),
							taskId,
							noToast: true,
						})
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
