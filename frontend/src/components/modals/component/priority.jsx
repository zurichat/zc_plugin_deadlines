import React from 'react'

const Priority = ({ status, forTitle }) => {
	const stat = status.toLowerCase()
	let color = 'low'
	switch (stat) {
		case 'low':
			color = 'low'
			break
		case 'medium':
			color = 'medium'
			break
		case 'high':
			color = 'high'
			break
	}

	const bg_color = `dtw-bg-brand-priority-${color}`
	const title = forTitle ? '| Priority Level - ' : ''

	return (
		<div className="dtw-inline-flex dtw-gap-2 dtw-justify-start dtw-items-center">
			<div className="dtw-capitalize dtw-text-sm dtw-leading-none dtw-self-center">
				{title} {status}
			</div>
			<div className={`dtw-h-3 dtw-w-3 dtw-rounded-1/2 ${bg_color}`}></div>
		</div>
	)
}

export default Priority
