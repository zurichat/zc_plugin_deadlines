import React from 'react'
import './index.css'
import { WhiteBoard } from './whiteBoard'

const App = () => {
	return (
		<div>
			{/* <header className="text-3xl text-cra-primary font-craFont">
				<h1>Zuri Chat Reminder Plugin</h1>
				<p>
					Reminder plugin for the open-source{' '}
					<a href="https://zuri.chat" className="text-cra-link">
						Zuri Chat
					</a>
				</p>
			</header> */}
			<WhiteBoard />
		</div>
	)
}

export default App
