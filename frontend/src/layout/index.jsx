import React from 'react'

import Nav from './nav'

import DeadlineList from '@deadlineList'
import DeadlineStatus from '@deadlineStatus'

const Layout = () => {
	return (
		<div className="flex flex-col bg-white w-9/12 h-auto py-4 my-4 mr-2 gap-4 shadow border-2 border-gray-200 rounded">
			<Nav />
			<DeadlineList />
			<DeadlineStatus />
		</div>
	)
}

export default Layout
