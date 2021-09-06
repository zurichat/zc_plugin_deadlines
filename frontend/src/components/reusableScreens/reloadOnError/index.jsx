import React from 'react'

const ReloadOnError = ({ ...props }) => {
	return (
		<div {...props}>
			<h3 className="mb-4">Hmm, something went wrong. Try again?</h3>
			<button
				className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
				onClick={() => window.location.reload()}
			>
				Reload
			</button>
		</div>
	)
}
export default ReloadOnError
