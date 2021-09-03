import React from 'react'
import Date from './Date'

import Remaining from '../../../assets/svg icons/remaining.svg'
const RemainingTime = () => {
	const props = {
		dateTopic: 'Time:',
		date: '05:00 pm',
		icon: <img src={Remaining} className="h-full" alt="time-icon" />,
	}

	return <Date {...props} />
}

export default RemainingTime
