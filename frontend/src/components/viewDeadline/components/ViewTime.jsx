import React from 'react'
import TimeIcon from '../../../assets/img/png/time.png'

const ViewTime = ({ time }) => {
	return (
		<div className="flex items-start mb-5">
			<img src={TimeIcon} alt="date" className="w-4 h-4" />
			<p className="text-sm text-left ml-2 font-bold">
				Time:
				<br />
				<b className="text-sm font-normal"> {time}</b>
			</p>
		</div>
	)
}

export default ViewTime
