import React, { useState } from 'react'
import TabNav from './Components/TabNav.jsx'
import Tab from './Components/Tab.jsx'

const App = () => {
	const [prevState, nextState] = useState({
		selected: 'Overdue',
	})

	const setSelected = (tab) => {
		nextState({ selected: tab })
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen text-center">
			App
		</div>
	)
}

export default App
