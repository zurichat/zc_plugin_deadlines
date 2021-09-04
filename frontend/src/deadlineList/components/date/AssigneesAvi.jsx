import React from 'react'

import Date from './Date'

import UserIcon from '../../../deadlineStatus/tabSwitcher/png/users.png'

const Assignees = () => {
	const props = {
		dateTopic: '',
		date: '',
		icon: <img src={UserIcon} className="h-full" alt="avatar" />,
		iconColor: '',
	}

	return <Date {...props} />
}

// const Assignees = ({ UserIcon }) => {
// 	return (
// 		<div className="flex">
// 			<img src={UserIcon} alt="" className="w-13 h-6" />
// 		</div>
// 	)
// }

export default Assignees
