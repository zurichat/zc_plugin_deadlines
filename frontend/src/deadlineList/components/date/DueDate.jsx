import React from 'react'
import Date from './Date'

import CalenderIcon from '@assets/svg icons/calender.svg'
const DueDate = () => {
	const props = {
		dateTopic: 'Due Date',
		date: '31st Aug,2021',
		icon: <img src={CalenderIcon} className="h-full" alt="calender-icon" />,
		iconColor: 'bg-brand-avatar-blue',
	}
	return <Date {...props} />
}

export default DueDate
