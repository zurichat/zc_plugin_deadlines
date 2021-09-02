import React from 'react'
import PropTypes from 'prop-types'

const Date = ({ icon, dateTopic, date }) => {
	return (
		<div className="inline-flex items-center justify-center bg-gray-50 p-2">
			<div className="flex items-start">
				<div
					className="h-7 p-1 rounded-full leading-none flex item-center justify-center  mr-2"
					style={{ backgroundColor: '#EAF2FD' }}
				>
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
Date.propTypes = {
	icon: PropTypes.element.isRequired,
	dateTopic: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
}

export default Date
