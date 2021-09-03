import React from 'react'
import Date from './Date'

import Calender from '../../../img/svg icons/calender.svg'
const StartDate = () => {
	return (
		<>
			<Date
				icon={<img src={Calender} className="h-full" alt="c-icon" />}
				dateTopic="StartDate:"
				date="05:00 pm"
			/>
		</>
	)
}

export default StartDate
