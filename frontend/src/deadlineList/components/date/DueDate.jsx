import React from 'react'
import Date from './Date'

// import CalenderIcon from '@assets/img/svg/calender.svg'
import CalenderIcon from '../../../assets/img/svg/calender.svg'

const DueDate = () => {
	const props = {
		dateTopic: 'Due Date:',
		date: '31st Aug, 2021',
		icon: <img src={CalenderIcon} className="h-full" alt="calender-icon" />,
		iconColor: 'bg-brand-avatar-blue',
		// rightBorder: true,
	}
	return <Date {...props} />
}

export default DueDate
