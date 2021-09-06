import React from 'react'

const Date = ({
	icon,
	iconColor,
	dateTopic,
	date,
	rightBorder,
	tab,
	...props
}) => {
	return (
		<div
			className={`inline-flex items-center justify-center ${
				rightBorder ? `border-r` : null
			}`}
			{...props}
		>
			<div className="flex items-start">
				<div
					className={`h-6 p-1 mr-3 md:h-7 md:p-2 rounded-full leading-none flex ${iconColor} item-center justify-center`}
				>
					{icon}
				</div>
				<div className="flex flex-col text-left pt-1">
					<div className="text-sm text-brand-text-listTitle leading-none mb-1 md:text-sm">
						{dateTopic}
					</div>
					<div
						className={`text-sm font-bold md:text-sm text-${
							tab === 'overdue' ? 'brand-accent' : null
						}`}
					>
						{date}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Date
