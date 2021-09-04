import React from 'react'

const ViewDescription = ({ description }) => {
	return (
		<div>
			<h3 className="font-bold text-xl mb-2">Description</h3>
			<p className="text-base">{description}</p>
		</div>
	)
}

export default ViewDescription
