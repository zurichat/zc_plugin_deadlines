import React from 'react'
// import DeadlineModal from './components/modals/modalBase/deadline-moda
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/nav'

import CompletedPage from './pages/Completed/index'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'

const App = () => {
	return (
		// <DeadlineModal />
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
