import React from 'react'

const ViewTitle = ({ title }) => {
	return (
		<div className="mb-5 mt-2">
			<h3 className="font-bold md:text-xl">Title</h3>
			<p className="text-lg md:text-xl">{title}</p>
		</div>
	)
}

export default ViewTitle
