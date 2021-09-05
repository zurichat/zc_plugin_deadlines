import React from 'react'
import Date from './Date'

import Remaining from '../../../assets/img/svg/remaining.svg'

const RemainingTime = ({ tab }) => {
	const props = {
		dateTopic: 'Time:',
		date: '05:00 pm',
		icon: <img src={Remaining} className="-p-3" alt="time-icon" />,
		iconColor: 'bg-brand-avatar-green bg-opacity-25',
		actionColor: tab === 'overdue' ? 'brand-accent' : null,
	}

	return <Date {...props} />
}

export default RemainingTime
