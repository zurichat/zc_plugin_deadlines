import React from 'react'
import CancelButton from './deadlineList/components/CancelButton'

const App = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center ">
			<header className="text-3xl text-cra-primary font-craFont">
				<CancelButton />
				<h1>Zuri Chat Reminder Plugin</h1>
				<p>
					Reminder plugin for the open-source{' '}
					<a href="https://zuri.chat" className="text-cra-link">
						Zuri Chat
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
