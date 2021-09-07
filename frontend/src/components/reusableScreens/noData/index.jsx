import React from 'react'
import NewDeadlineButton from '../../../layout/nav/button'

const NoDataMessage = ({ ...props }) => {
	return (
		<div {...props}>
			<h3 className="mb-4">
				Hey, you don&apos;t have any deadlines. Try adding one?
			</h3>
			<NewDeadlineButton />
		</div>
	)
}

export default NoDataMessage
