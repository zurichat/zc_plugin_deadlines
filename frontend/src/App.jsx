import React from 'react'
import Button from 'react-bootstrap/Button'

const App = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-craPrimary text-center ">
			<header className="text-3xl text-white font-craFont">
				<h1>Zuri Chat Reminder Plugin</h1>
				<p>
					Reminder plugin for the open-source{' '}
					<a href="https://zuri.chat" className="text-craLink">
						Zuri Chat
					</a>
				</p>
				<Button variant="outline-primary">Bootstrapped!</Button>
			</header>
		</div>
	)
}

export default App
