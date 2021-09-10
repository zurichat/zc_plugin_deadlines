import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/nav'

import CompletedPage from './pages/Completed'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'

const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route path="/" exact>
					<UpcomingPage />
				</Route>
				<Route path="/completed">
					<CompletedPage />
				</Route>
				<Route path="/overdue">
					<OverduePage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
