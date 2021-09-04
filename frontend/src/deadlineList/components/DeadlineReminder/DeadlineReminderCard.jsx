import React from 'react'
import ListCard from '../../listCard'
import UserIcon from './png/users.png'

const DeadlineReminderCard = () => {
	return (
		<div className="md:flex">
			<div className="md:flex p-4 mr-8">
				<div>
					<h2 className="font-bold text-xl text-left">
						Designing Zuri&#39;s Dashboard
					</h2>
					<p className="text-sm">
						This task will be a sprint, we are to use the design...
					</p>
				</div>
				<div className="flex pt-2">
					<img src={UserIcon} alt="users" className="w-16 h-10" />
					<img src={UserIcon} alt="users" className="w-16 h-10 -ml-8" />
				</div>
			</div>
			<hr className="border-gray-200 border-1" />
			<div className="flex">
				<ListCard />
			</div>
		</div>
	)
}

export default DeadlineReminderCard
