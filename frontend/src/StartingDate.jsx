import React from 'react'
import DateIcon from './start-date.svg'

const StartingDate = () => {
	return (
		<div className="flex ">
			<img src={DateIcon} alt="date" className="mr-2" />
			<div className="text-left">
				<p className="text-xs text-gray-500 font-lato">Start Date:</p>
				<p className="text-xs text-black font-bold font-lato">
					31st August,2021
				</p>
			</div>
		</div>
	)
}

export default StartingDate
