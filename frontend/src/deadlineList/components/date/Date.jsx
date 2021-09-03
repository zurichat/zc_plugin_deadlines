import React from 'react'

const Date = ({ icon, dateTopic, date }) => {
	return (
		<div className="inline-flex items-center justify-center bg-brand-bg-lightGrey p-2">
			<div className="flex items-start">
				<div className="h-9 p-2 rounded-full leading-none bg-gray-200 flex item-center justify-center  mr-2">
					{icon}
				</div>
				<div className="flex flex-col text-left">
					<div className="text-base text-gray-400 leading-none mb-2">
						{dateTopic}
					</div>
					<div className=" text-base font-bold text-black">{date}</div>
				</div>
			</div>
		</div>
	)
}

export default Date
