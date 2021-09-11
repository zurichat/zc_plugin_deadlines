import React from 'react'

const ColTitleDes = ({ title, writeUp }) => {
	return (
		<div className="flex flex-col gap-2 items-start">
			<div>
				<h3 className="font-semibold text-base leading-none">{title}</h3>
			</div>
			<div className="text-sm leading-none">{writeUp}</div>
		</div>
	)
}

export default ColTitleDes
