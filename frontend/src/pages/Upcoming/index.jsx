import React from 'react'
import { useAllReminders } from '../../api/reminders'

import '../../styles/index.css'
import '../../styles/scroll.css'

import dotsIcon from '../../assets/svg/dots.svg'
import dateIcon from '../../assets/svg/start-date.svg'
import dueIcon from '../../assets/svg/remaining.svg'

const UpcomingPage = () => {
	const { fetchedData, isLoading, isPlaceholderData } = useAllReminders()

	console.log(fetchedData)

	// Pass through sort hook
	// const sortedDeadlineStore = useSort(deadlineStore)

	// Can be passed through search hook

	// Then use this data to render

	return (
		<div className="container grid grid-flow-row gap-4 p-4 ">
			<div className="border rounded-md p-4">
				<div>
					<div>
						<div className="flex justify-between ">
							<div className="flex items-center ">
								<h1 className="mr-2">Deadline Title</h1>
								<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							</div>
							<img src={dotsIcon} alt="icon" />
						</div>
						<p>Assigned by Admin Name to #channelname</p>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						assumenda similique enim architecto vitae quam ut numquam
					</p>
				</div>

				<div className="flex">
					<div className="grid grid-rows-2 grid-cols-2">
						<img src={dateIcon} alt="icon" className="col-start-1" />
						<p className="col-start-2">Start Date:</p>
						<p className="col-start-2">31st Aug, 2021</p>
					</div>

					<div className="grid grid-rows-2 grid-cols-2">
						<img src={dateIcon} alt="icon" className="col-start-1" />
						<p className="col-start-2">Due Date:</p>
						<p className="col-start-2">10th Sept, 2021</p>
					</div>

					<div className="grid grid-rows-2 grid-cols-2">
						<img src={dueIcon} alt="icon" className="col-start-1" />
						<p className="col-start-2">Due in:</p>
						<p className="col-start-2">2 days</p>
					</div>
				</div>
			</div>

			{/* <div className="border rounded-md">
				<div>
					<div className="card-header">
						<span>
							<h1>Deadline Title</h1>
							<div className="w-2 h-2 bg-yellow-500 rounded-full "></div>
							<img src="../../assets/svg/3dots.svg" alt="details icon" />
						</span>
						<p>Assigned by Admin Name to #channelname</p>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
						assumenda similique enim architecto vitae quam ut numquam
					</p>
				</div>

				<div>
					<img src="../../assets/svg/start-date.svg" alt="icon" />
					<p>Start Date:</p>
					<p>31st Aug, 2021</p>
				</div>

				<div>
					<img src="../../assets/svg/start-date.svg" alt="icon" />
					<p>Due Date:</p>
					<p>10th Sept, 2021</p>
				</div>

				<div>
					<img src="../../assets/svg/remaining.svg" alt="icon" />
					<p>Due in:</p>
					<p>2 days</p>
				</div>
			</div> */}
		</div>
	)
}

export default UpcomingPage
