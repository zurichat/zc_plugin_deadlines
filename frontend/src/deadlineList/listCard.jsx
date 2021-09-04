import React from 'react'
import DueDate from './components/date/DueDate'
import RemainingTime from './components/date/RemainingTime'
import StartDate from './components/date/StartDate'

const ListCard = () => {
	return (
		<div className="flex mb-3">
			<div className="">
				<StartDate />
				<DueDate />
				<RemainingTime />
			</div>
		</div>
	)
}

export default ListCard
