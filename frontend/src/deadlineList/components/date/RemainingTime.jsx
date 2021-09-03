import React from 'react'
import Date from './Date'

import Remaining from '../../../img/svg icons/remaining.svg'
const RemainingTime = () => {
	return (
		<>
			<Date
				icon={<img src={Remaining} className="h-full" alt="c-icon" />}
				dateTopic="Time:"
				date="05:00 pm"
			/>
		</>
	)
}

export default RemainingTime
