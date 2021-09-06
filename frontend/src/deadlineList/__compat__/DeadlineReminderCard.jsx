/**
 * COPYRIGHT 2021, ZC-Plugin-reminder.
 * All rights reserved.
 * Written by Akintokun, Pelumi Eyitimonwa.
 */

import React from 'react'
import ListCard from '../components/listCard'
import UserIcon from './png/users.png'
import DeadlineTitle from '../components/DeadlineTitle'

const DeadlineReminderCard = () => {
	return (
		<div className="md:flex">
			<div className="md:flex p-4 mr-8">
				<div>
					<DeadlineTitle title="Designing Zuri's Dashboard" />
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
