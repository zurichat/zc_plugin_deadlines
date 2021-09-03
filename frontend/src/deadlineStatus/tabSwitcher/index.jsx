import React, { useState } from 'react'
import TabNav from './TabNav.jsx'
import Tab from './Tab.jsx'

const TabSwitcher = () => {
	const [prevState, nextState] = useState({
		selected: 'Overdue',
	})

	const setSelected = (tab) => {
		nextState({ selected: tab })
	}

	return (
		<div className="flex justify-center items-center mt-4">
			<TabNav
				tabs={['Overdue', 'Completed']}
				selected={prevState.selected}
				setSelected={setSelected}
			>
				<Tab
					isSelected={prevState.selected === 'Overdue'}
					className="font-bold"
				>
					<p>Designing Zuris Dashboard</p>
				</Tab>

				<Tab
					isSelected={prevState.selected === 'Completed'}
					className="font-bold"
				>
					<p>My Completed tasks</p>
				</Tab>
			</TabNav>
		</div>
	)
}

export default TabSwitcher
