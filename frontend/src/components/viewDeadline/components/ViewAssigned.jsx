import React from 'react'
import UserIcon from '../../../assets/img/png/users.png'

const ViewAssigned = ({}) => {
	return (
		<div className="flex flex-col">
			<h3 className="font-bold text-xl text-left mb-2">Assigned</h3>
			<div className="flex">
				<img src={UserIcon} alt="users" className="w-16 h-10" />
				<img src={UserIcon} alt="users" className="w-16 h-10 -ml-8" />
			</div>
		</div>
	)
}

export default ViewAssigned
