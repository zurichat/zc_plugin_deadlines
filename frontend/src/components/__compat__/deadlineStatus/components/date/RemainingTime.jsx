import React from 'react'
import DateFn from './Date'

import Remaining from '../../../assets/img/svg/remaining.svg'

const RemainingTime = ({ dueDate, tab }) => {
	const propDate = new Date(Date.parse(dueDate)).toLocaleTimeString(
		{},
		{
			timeZone: 'UTC',
			hour12: true,
			hour: 'numeric',
			minute: 'numeric',
		}
	)

	const props = {
		dateTopic: 'Time:',
		date: propDate,
		icon: <img src={Remaining} className="h-full" alt="time-icon" />,
		iconColor: 'bg-brand-avatar-green bg-opacity-25',
		tab,
	}

	return <DateFn {...props} />
}

export default RemainingTime
