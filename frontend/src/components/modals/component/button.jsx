import React from 'react'

const ModalButton = ({ cancelFunc, actionFunc, actionName }) => {
	return (
		<div className="flex justify-end gap-4">
			<button
				className="h-11 px-5 text-sm text-brand-primary font-semibold"
				onClick={cancelFunc}
			>
				Cancel
			</button>
			<button
				className="h-11 px-5 text-sm bg-brand-primary font-semibold text-brand-bg-white"
				onClick={actionFunc}
			>
				{actionName}
			</button>
		</div>
	)
}
export default ModalButton
