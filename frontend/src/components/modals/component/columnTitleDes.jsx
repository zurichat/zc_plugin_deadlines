import React from 'react'

const ColTitleDes = ({ space, title, writeUp, alignStretch }) => {
	const flexAll = space ? 'flex-grow' : ''
	const stretch = alignStretch ? '' : 'items-start'
	return (
		<div
			className={`dtw-flex dtw-flex-col dtw-gap-2 dtw-${stretch} dtw-${flexAll}`}
		>
			<div>
				<h3 className="dtw-font-semibold dtw-text-sm dtw-leading-none">
					{title}
				</h3>
			</div>
			<div className="dtw-text-xs dtw-leading-none">{writeUp}</div>
		</div>
	)
}

export default ColTitleDes
