import React from 'react'
import Date from './Date'

const StartDate = () => {
	const props = {
		dateTopic: 'Start Date:',
		date: '31st Aug,2021',
		icon: (
			<img
				src={'@assets/img/svg/calender.svg'}
				className="h-full"
				alt="calender-icon"
			/>
		),
		iconColor: 'bg-brand-avatar-blue',
	}

	return <Date {...props} />
}

export default StartDate
