import React from 'react'

const ColTitleDes = ({ space, title, writeUp, alignStretch }) => {
	const flexAll = space ? 'flex-grow' : ''
	const stretch = alignStretch ? '' : 'items-start'
	return (
		<div className={`flex flex-col gap-2 ${stretch} ${flexAll}`}>
			<div>
				<h3 className="font-semibold text-sm leading-none">{title}</h3>
			</div>
			<div className="text-xs leading-none">{writeUp}</div>
		</div>
	)
}

export default ColTitleDes
