import React from 'react'

const Date = ({ icon, iconColor, dateTopic, date, rightBorder, ...props }) => {
	return (
		<div
			className={`inline-flex items-center justify-center ${
				rightBorder ? `border-r` : null
			}`}
			{...props}
		>
			<div className="flex items-start">
				<div
					className={`h-6 p-1 mr-4 md:h-7 md:p-2 rounded-full leading-none flex ${iconColor} item-center justify-center  mr-2`}
				>
					{icon}
				</div>
				<div className="flex flex-col text-left pt-1">
					<div className="text-sm text-brand-text-listTitle leading-none mb-1 ">
						{dateTopic}
					</div>
					<div className="text-sm md:text-base font-bold text-black">
						{date}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Date
