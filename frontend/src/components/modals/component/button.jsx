import React from 'react'

const ModalButton = ({ cancelFunc, actionFunc, actionName, ...props }) => {
	return (
		<div className="dtw-flex dtw-justify-end dtw-gap-4" {...props}>
			<button
				className="dtw-h-11 dtw-px-5 dtw-text-sm dtw-text-brand-primary font-semibold"
				onClick={cancelFunc}
			>
				Cancel
			</button>
			<button
				className="dtw-h-11 dtw-px-5 dtw-text-sm dtw-bg-brand-primary dtw-dtw-dtw-dtw-font-semibold dtw-text-brand-bg-white"
				onClick={actionFunc}
				type="submit"
			>
				{actionName}
			</button>
		</div>
	)
}
export default ModalButton
