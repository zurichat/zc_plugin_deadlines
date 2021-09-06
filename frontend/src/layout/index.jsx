import React from 'react'
import Nav from './nav'

import DeadlineList from '../deadlineList'
import DeadlineStatus from '../deadlineStatus'
import { Spinner } from 'react-activity'

import { useAllReminders } from '../api/reminders'
import NoDataMessage from '../components/reusableScreens/noData'
import ReloadOnError from '../components/reusableScreens/reloadOnError'

const Layout = () => {
	const { isLoading, fetchedData, isPlaceholderData, error } = useAllReminders()

	return (
		<div
			id="layout-root"
			className="bg-white w-full h-screen gap-4 pb-5 overflow-y-scroll flex flex-col px-5"
		>
			<Nav />
			{error ? (
				<div className="flex flex-col flex-grow items-center justify-center">
					<ReloadOnError className="text-center" />
				</div>
			) : fetchedData.length === 0 && !isPlaceholderData ? (
				<div className="flex flex-grow items-center justify-center">
					<NoDataMessage className="text-center" />
				</div>
			) : (
				<div className="flex flex-grow">
					{isLoading || isPlaceholderData ? (
						<div className="flex flex-grow justify-center items-center">
							<Spinner color="#00B87C" size={32} speed={1} animating={true} />
						</div>
					) : (
						<div className="flex flex-col w-full md:grid md:grid-cols-3">
							<div className="md:col-span-2 h-screen/1.5 md:h-screen overflow-y-scroll border-r-2 border-opacity-40 py-6">
								<DeadlineList reminderArray={fetchedData.data.data.result} />
							</div>
							<div className="md:col-span-1 h-screen md:h-screen px-3 overflow-y-scroll">
								<DeadlineStatus reminderArray={fetchedData.data.data.result} />
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Layout
