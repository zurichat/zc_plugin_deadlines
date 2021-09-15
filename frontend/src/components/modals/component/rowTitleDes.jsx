import React from 'react'

const RowTitleDes = ({ title, writeUp }) => {
	return (
		<div className="flex gap-2 justify-start">
			<div>
				<h3 className="font-semibold text-sm leading-none">{title}</h3>
			</div>
			<div className="text-xs leading-none self-center">{writeUp}</div>
		</div>
	)
}

export default RowTitleDes
