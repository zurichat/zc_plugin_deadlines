import React from 'react'

const ReloadOnError = ({ ...props }) => {
	return (
		<div {...props}>
			<h3 className="dtw-mb-4">Hmm, something went wrong. Try again?</h3>
			<button
				className="dtw-w-30 dtw-bg-green-500 hover:dtw-bg-green-700 dtw-text-white dtw-py-2 dtw-px-4 dtw-rounded"
				onClick={() => window.location.reload()}
			>
				Reload
			</button>
		</div>
	)
}
export default ReloadOnError
