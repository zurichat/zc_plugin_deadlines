import React from 'react'
import DateIcon from '@assets/img/svg/start-date.svg'

const StartingDate = ({ dateString }) => {
	return (
		<div className="flex ">
			<img src={DateIcon} alt="date" className="mr-2" />
			<div className="text-left">
				<p className="text-xs text-brand-text-body">Start Date:</p>
				<p className="text-xs text-black font-bold ">{dateString}</p>
			</div>
		</div>
	)
}

export default StartingDate
