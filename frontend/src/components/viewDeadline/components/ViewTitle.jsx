import React from 'react'

const ViewTitle = ({ title }) => {
	return (
		<div className="mb-5">
			<h3 className="font-bold text-xl">Title</h3>
			<p className="text-xl">{title}</p>
		</div>
	)
}

export default ViewTitle
