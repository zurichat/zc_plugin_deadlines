import React from 'react'
import Date from './Date'

import Remaining from '../../../assets/img/svg/remaining.svg'

const RemainingTime = () => {
	const props = {
		dateTopic: 'Time:',
		date: '05:00 pm',
		icon: <img src={Remaining} className="h-full" alt="time-icon" />,
		iconColor: 'bg-brand-avatar-green bg-opacity-25',
	}

	return <Date {...props} />
}

export default RemainingTime
