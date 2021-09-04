import React from 'react'
import Nav from './nav'
import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'

const Layout = () => {
	return (
		<div className="bg-white w-full h-screen gap-4 p-1">
			<Nav />
			<div className="flex flex-col md:grid md:grid-cols-3 ">
				<div className="md:col-span-2 h-screen/1.5 md:h-screen overflow-y-scroll border-r-2 border-opacity-40 p-6">
					<DeadlineList />
				</div>
				<div className="md:col-span-1 p-6 md:h-screen m-4">
					<DeadlineStatus />
				</div>
			</div>
		</div>
	)
}

export default Layout
