import React from 'react'
import DueDate from './components/date/DueDate'
import RemainingTime from './components/date/RemainingTime'
import StartDate from './components/date/StartDate'

const DeadlineList = () => {
	return (
		<>
			<div id="list-card" className="flex">
				<StartDate />
				<DueDate />
				<RemainingTime />
			</div>
		</>
	)
}

export default DeadlineList
