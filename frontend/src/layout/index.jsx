import React from 'react'

import Nav from './nav'

import DeadlineList from '@deadlineList'
import DeadlineStatus from '@deadlineStatus'
import SortBar from '../components/sortBar'

const Layout = () => {
	return (
		<>
			<Nav />
			<DeadlineList />
			<DeadlineStatus />
			<SortBar />
		</>
	)
}

export default Layout
