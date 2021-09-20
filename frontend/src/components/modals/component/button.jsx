import React from 'react'

const ModalButton = ({ cancelFunc, actionFunc, actionName, ...props }) => {
	return (
		<div className="flex justify-end gap-4" {...props}>
			<button
				className="h-11 px-5 text-sm text-brand-primary font-semibold"
				onClick={cancelFunc}
			>
				Cancel
			</button>
			<button
				className="h-11 px-5 text-sm bg-brand-primary font-semibold text-brand-bg-white"
				onClick={actionFunc}
				type="submit"
			>
				{actionName}
			</button>
		</div>
	)
}
export default ModalButton
