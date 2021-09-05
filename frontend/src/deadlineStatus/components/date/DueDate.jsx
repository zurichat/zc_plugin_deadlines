import React from 'react'
import Date from './Date'

// import CalenderIcon from '@assets/img/svg/calender.svg'
import CalenderIcon from '../../../assets/img/svg/calender.svg'

const DueDate = ({ tab }) => {
	const props = {
		dateTopic: 'Due Date:',
		date: '31st Aug, 2021',
		icon: <img src={CalenderIcon} className="h-full" alt="calender-icon" />,
		iconColor: 'bg-brand-avatar-blue',
		// Don't judge, I was/am tired when I wrote this
		actionColor: tab === 'overdue' ? 'brand-accent' : null,
	}
	return <Date {...props} />
}

export default DueDate
