import React from 'react'
import Date from './Date'

import CalenderIcon from '../../../assets/svg icons/calender.svg'
const DueDate = () => {
	return (
		<>
			<Date
				icon={<img src={CalenderIcon} className="h-full" alt="c-icon" />}
				dateTopic="Due Date:"
				date="31st Aug,2021"
			/>
		</>
	)
}

export default DueDate
