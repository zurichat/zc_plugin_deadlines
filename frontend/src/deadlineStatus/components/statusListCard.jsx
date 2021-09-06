import React from 'react'

import DueDate from '../components/date/DueDate'
import RemainingTime from '../components/date/RemainingTime'
import StartDate from '../components/date/StartDate'
import TitleAvatar from '../__compat__/TitleAvatar'

const StatusListCard = ({ tab, title, description, dueDate, startDate }) => {
	return (
		<div className="flex flex-col mb-3">
			<TitleAvatar title={title} description={description} />
			<div id="divider" className="h-full md:border-t-1/2 md:mb-5" />
			<div className="flex justify-between">
				<StartDate tab={tab} startDate={dueDate} />
				<div id="divider" className=" border border-r-1/2" />
				<DueDate tab={tab} dueDate={startDate} />
				<div id="divider" className=" border border-r-1/2" />
				<RemainingTime tab={tab} dueDate={dueDate} />
			</div>
		</div>
	)
}

export default StatusListCard
