import React from 'react'
import Nav from './nav'
import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'

import { useAllReminders } from '@api/reminders'

const Layout = () => {
	const res = useAllReminders()

	let reminders = null
	if (res.data) {
		const { data } = res.data
		const { result } = data
		reminders = result
	}

	return (
		<div
			id="layout-root"
			className="bg-white w-full h-screen gap-4 p-1 overflow-y-scroll"
		>
			<Nav />
			<div className="flex flex-col md:grid md:grid-cols-3 ">
				<div className="md:col-span-2 h-screen/1.5 md:h-screen overflow-y-scroll border-r-2 border-opacity-40 p-6">
					<DeadlineList reminderArray={reminders ? reminders : null} />
				</div>
				<div className="md:col-span-1 p-6 md:h-screen m-4 overflow-y-scroll">
					<DeadlineStatus reminderArray={reminders ? reminders : null} />
				</div>
			</div>
		</div>
	)
}

export default Layout
