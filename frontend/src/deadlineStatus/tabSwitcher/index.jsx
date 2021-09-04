import React, { useState } from 'react'

import TabNav from './TabNav.jsx'
import Tab from './Tab.jsx'
import OverdueCard from './OverdueCard.jsx'
import CompletedCard from './CompletedCard.jsx'

const TabSwitcher = () => {
	const [prevState, nextState] = useState({
		selected: 'Overdue',
	})

	const setSelected = (tab) => {
		nextState({ selected: tab })
	}

	return (
		<div className="flex justify-center items-center">
			<TabNav
				tabs={['Overdue', 'Completed']}
				selected={prevState.selected}
				setSelected={setSelected}
			>
				<Tab
					isSelected={prevState.selected === 'Overdue'}
					className="font-bold text-lg"
				>
					<div className="my-10">
						<OverdueCard />
					</div>
					<div className="my-10">
						<OverdueCard />
					</div>
				</Tab>

				<Tab
					isSelected={prevState.selected === 'Completed'}
					className="font-bold text-lg"
				>
					<div className="my-10">
						<CompletedCard />
					</div>
					<div className="my-10">
						<CompletedCard />
					</div>
				</Tab>
			</TabNav>
		</div>
	)
}

export default TabSwitcher
