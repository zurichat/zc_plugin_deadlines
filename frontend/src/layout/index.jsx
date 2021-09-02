import React from 'react'

import Nav from './nav'

import DeadlineList from '@deadlineList'
import DeadlineStatus from '@deadlineStatus'

const Layout = () => {
	return (
		<div className="flex flex-col bg-white w-9/12 h-auto py-4 my-4 mr-2 gap-4 shadow border-2 border-gray-200 rounded">
			<Nav />

			<div className="grid grid-cols-3">
				<div className="col-span-2 p-6 m-8 h-screen border-r-2 border-gray-300">
					<DeadlineList />
				</div>
				<div className="col-span-1 p-6 h-5/6 bg-gray-50 mr-4 my-8 rounded ">
					<DeadlineStatus />
				</div>
			</div>
		</div>
	)
}

export default Layout
