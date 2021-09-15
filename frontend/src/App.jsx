import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/nav'

import CompletedPage from './pages/Completed/index'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'
import { ModalContext } from './context/ModalContext'
import NewDeadline from './components/__compat__/newDeadline'
import AdminViewStatus from './components/modals/admin/viewDeadline'
import AdminViewOther from './components/modals/modalBase/adminViewOther'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<BrowserRouter>
			{modalData.modalShow && modalData.modalType === 'adminCreate' && (
				<NewDeadline />
			)}
			{modalData.modalShow && modalData.modalType === 'adminViewOther' && (
				<AdminViewOther />
			)}
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
			{modalData.modalShow && modalData.modalType === 'adminView' && (
				<AdminViewStatus />
			)}
		</BrowserRouter>
	)
}

export default App
