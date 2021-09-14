import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/nav'
import CompletedPage from './pages/Completed/index'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'
import { ModalContext } from './context/ModalContext'
import NewDeadline from './components/__compat__/newDeadline'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<BrowserRouter>
			{modalData.modalShow && modalData.modalType === 'adminCreate' && (
				<NewDeadline />
			)}
			<nav className="p-5 ">
				<Nav />
			</nav>
			<main className="p-5 ">
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
			</main>
		</BrowserRouter>
	)
}

export default App
