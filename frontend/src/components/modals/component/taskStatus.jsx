import React from 'react'

const StatusChanger = ({ currentStatus, setStatus, toggler }) => {
	return (
		<div className="flex ">
			<div className="h-6 w-6 border-black border-2 rounded"></div>
			<label className="h-6 w-12 mx-3">
				<input
					className=" absolute -ml-20 opacity-0"
					type="checkbox"
					onChange={(event) => {
						setStatus({ status: event.target.checked })
						currentStatus
							? toggler.current.classList.add('ml-5')
							: toggler.current.classList.remove('ml-5')
					}}
				/>
				<div className="flex w-9 h-4 mt-1 border-2 border-black rounded-full bg-brand-primary relative">
					<div
						ref={toggler}
						className={
							currentStatus
								? 'flex w-3 duration-300 h-3 ml-5 rounded-full bg-brand-secondary relative'
								: 'flex w-3 duration-300 h-3 rounded-full bg-brand-secondary relative'
						}
					></div>
				</div>
			</label>
		</div>
	)
}

export default StatusChanger
