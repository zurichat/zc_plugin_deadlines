import React from 'react'
import DueDate from './components/date/DueDate'
import RemainingTime from './components/date/RemainingTime'
import StartDate from './components/date/StartDate'
import Assignees from './components/date/AssigneesAvi'

const ListCard = () => {
	return (
		<div className="flex mb-3">
			<div className="">
				<StartDate />
				<DueDate />
				<RemainingTime />
				<Assignees />
			</div>
		</div>
	)
}

export default ListCard
