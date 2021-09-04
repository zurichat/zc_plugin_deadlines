import React from 'react'
import Nav from './nav'
import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'

// Temporary placeholder element for DeadlineList function
const Title = () => {
	return <div>Zuri Project</div>
}

// Temporary placeholder array for DeadlineList function
const list = [
	{
		title: <Title />,
	},
	{
		title: <Title />,
	},
	{
		title: <Title />,
	},
]

const Layout = () => {
	return (
		<div className="flex flex-col w-full h-screen gap-4 p-1">
			<Nav />
			<div className="grid grid-cols-3">
				<div className="col-span-2 p-6 m-8">
					<DeadlineList list={list} />
				</div>
				<div className="col-span-1 p-6 h-5/6 mr-4 my-8">
					<DeadlineStatus />
				</div>
			</div>
		</div>
	)
}

export default Layout
