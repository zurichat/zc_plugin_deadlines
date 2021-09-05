import React, { useState } from 'react'

import TabNav from './TabNav.jsx'
import Tab from './Tab.jsx'
import StatusListCard from '../statusListCard.jsx'

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
					<div className="mb-14">
						<StatusListCard tab={'overdue'} />
					</div>
					<div className="mb-14">
						<StatusListCard tab={'overdue'} />
					</div>
				</Tab>

				<Tab
					isSelected={prevState.selected === 'Completed'}
					className="font-bold text-lg"
				>
					<div className="mb-14">
						<StatusListCard tab={'completed'} />
					</div>
					<div className="mb-14">
						<StatusListCard tab={'completed'} />
					</div>
				</Tab>
			</TabNav>
		</div>
	)
}

export default TabSwitcher
