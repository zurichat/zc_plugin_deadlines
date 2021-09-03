import React from 'react'

import Nav from './nav'

import DeadlineList from '@deadlineList'
import DeadlineStatus from '@deadlineStatus'

const Layout = () => {
	return (
		<>
			<Nav />
			<DeadlineList />
			<DeadlineStatus />
		</>
	)
}

export default Layout
