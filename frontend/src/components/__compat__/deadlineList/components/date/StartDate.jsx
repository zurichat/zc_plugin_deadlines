import React from 'react'
import DateFn from './Date'

import CalenderIcon from '../../../assets/img/svg/calender.svg'

const StartDate = ({ startDate }) => {
	const monthNames = [
		'Jan',
		'Feb',
		'March',
		'April',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const propDate = new Date(Date.parse(startDate))

	const props = {
		dateTopic: 'Start Date:',
		date: `${propDate.getDate()} ${
			monthNames[propDate.getMonth()]
		}, ${propDate.getFullYear()}`,
		icon: <img src={CalenderIcon} className="h-full" alt="calender-icon" />,
		iconColor: 'bg-brand-avatar-blue',
	}

	return <DateFn {...props} />
}

export default StartDate
