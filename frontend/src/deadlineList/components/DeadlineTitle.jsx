import React from 'react'

const DeadlineTitle = ({ title, ...props }) => {
	return (
		<h1 className="font-bold" {...props}>
			{title}
		</h1>
	)
}

export default DeadlineTitle
