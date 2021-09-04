import React from 'react'
import Nav from './nav'
import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'

const Layout = () => {
	return (
		<div className="flex flex-col w-full h-screen gap-4 p-1">
			<Nav />
			<div className="grid grid-cols-3">
				<div className="col-span-2 p-6 m-8">
					<DeadlineList />
				</div>
				<div className="col-span-1 p-6 h-5/6 mr-4 my-8">
					<DeadlineStatus />
				</div>
			</div>
		</div>
	)
}

export default Layout
