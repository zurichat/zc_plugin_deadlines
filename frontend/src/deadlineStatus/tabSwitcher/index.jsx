import React, { useState } from 'react'

import TabNav from './TabNav.jsx'
import Tab from './Tab.jsx'
import StatusListCard from '../components/statusListCard'

const TabSwitcher = ({ reminderArray }) => {
	const [prevState, nextState] = useState({
		selected: 'Overdue',
	})

	const setSelected = (tab) => {
		nextState({ selected: tab })
	}

	return (
		<div className="flex justify-center items-center overflow-y-scroll">
			<TabNav
				tabs={['Overdue', 'Completed']}
				selected={prevState.selected}
				setSelected={setSelected}
			>
				<Tab
					isSelected={prevState.selected === 'Overdue'}
					className="font-bold text-lg"
				>
					{/* Sliced to map just n times */}
					{Array.isArray(reminderArray) &&
						reminderArray.slice(0, 3).map((value, index) => {
							const { title, description, dueDate, startDate } = value.payload
							return (
								<div className="mb-14" key={index}>
									<StatusListCard
										tab={'overdue'}
										title={title}
										description={description}
										dueDate={dueDate}
										startDate={startDate}
									/>
								</div>
							)
						})}
				</Tab>

				<Tab
					isSelected={prevState.selected === 'Completed'}
					className="font-bold text-lg"
				>
					{/* Sliced to map just n times */}
					{Array.isArray(reminderArray) &&
						reminderArray.slice(0, 3).map((value, index) => {
							const { title, description, dueDate, startDate } = value.payload
							return (
								<div className="mb-14" key={index}>
									<StatusListCard
										tab={'completed'}
										title={title}
										description={description}
										dueDate={dueDate}
										startDate={startDate}
									/>
								</div>
							)
						})}
				</Tab>
			</TabNav>
		</div>
	)
}

export default TabSwitcher
