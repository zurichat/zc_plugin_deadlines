import React from 'react'

const ViewDescription = ({ description }) => {
	return (
		<div>
			<h3 className="font-bold md:text-xl mb-2">Description</h3>
			<p className="tracking-tighter md:tracking-normal md:text-base">
				{description}
			</p>
		</div>
	)
}

export default ViewDescription
