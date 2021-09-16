import React from 'react'

const NoDataMessage = ({ ...props }) => {
	return (
		<div {...props}>
			<h3 className="mb-4">
				Hey, you don&apos;t have any deadlines. Try adding one?
			</h3>
		</div>
	)
}

export default NoDataMessage
