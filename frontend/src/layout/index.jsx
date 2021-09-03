import React from 'react'
import Nav from './nav'
import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'

const Layout = () => {
	return (
		<div className="bg-white w-full h-screen gap-4 p-1">
			<Nav />
			<div className="grid lg:grid-cols-3">
				<div className="lg:col-span-2 h-screen border-r-2 p-6">
					<DeadlineList />
				</div>
				<div className="lg:col-span-1 p-6 h-screen bg-gray-50 opacity-50 m-4">
					<DeadlineStatus />
				</div>
			</div>
		</div>
	)
}

export default Layout
