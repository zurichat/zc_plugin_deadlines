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

	const bg_color = `bg-brand-priority-${color}`
	const title = forTitle ? '| Priority Level - ' : ''

	return (
		<div className="inline-flex gap-2 justify-start items-center">
			<div className="capitalize text-sm leading-none self-center">
				{title} {status}
			</div>
			<div className={`h-3 w-3 rounded-1/2 ${bg_color}`}></div>
		</div>
	)
}

export default Priority
