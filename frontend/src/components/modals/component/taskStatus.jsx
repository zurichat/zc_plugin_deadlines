import React, { useEffect } from 'react'

const StatusChanger = ({
	currentStatus,
	setStatus,
	toggler,
	deadlineStatus,
	radioSelect,
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
		<div className="dtw-flex ">
			{/* <div
				ref={deadlineStatus}
				className="dtw-h-6 dtw-w-6 dtw-border-black dtw-border-2 dtw-rounded"
			></div> */}
			<label className="dtw-h-6 dtw-w-12 dtw-mx-3">
				<input
					ref={radioSelect}
					className=" dtw-absolute dtw--ml-20 dtw-opacity-0"
					type="checkbox"
					onChange={(event) => {
						setStatus({ status: event.target.checked })
						currentStatus
							? (toggler.current.classList.add('ml-5'),
							  (deadlineStatus.current.innerText = 'Pending'))
							: (toggler.current.classList.remove('ml-5'),
							  (deadlineStatus.current.innerText = 'Completed'))
					}}
				/>
				<div className="dtw-flex dtw-w-9 dtw-h-4 dtw-mt-1 dtw-border-2 dtw-border-black dtw-rounded-full dtw-bg-brand-primary dtw-relative">
					<div
						ref={toggler}
						className={
							currentStatus
								? 'dtw-flex w-3 duration-300 h-3 ml-5 dtw-rounded-full bg-brand-secondary dtw-relative'
								: 'dtw-flex w-3 duration-300 h-3 dtw-rounded-full bg-brand-secondary dtw-relative'
						}
					></div>
				</div>
			</label>
		</div>
	)
}

export default StatusChanger
