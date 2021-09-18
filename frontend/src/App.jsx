import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/index.css'
import './styles/scroll.css'

import Nav from './components/nav'
import CompletedPage from './pages/Completed/index'
import OverduePage from './pages/Overdue'
import UpcomingPage from './pages/Upcoming'
import { ModalContext } from './context/ModalContext'
import NewDeadline from './components/modals/admin/newDeadline'
import UserViewDeadline from './components/modals/user/userViewDeadline/userView'
import EditDeadline from './components/modals/admin/editDeadline/editDeadline'
import AdminView from './components/modals/admin/viewDeadline/adminView'
import SelectPage from './components/nav/components/selectPages'

import './styles/index.css'
import './styles/scroll.css'
import 'react-activity/dist/Spinner.css'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<BrowserRouter>
			{modalData.modalShow && modalData.modalType === 'adminCreate' && (
				<NewDeadline />
			)}
			{modalData.modalShow && modalData.modalType === 'userView' && (
				<UserViewDeadline {...modalData.modalData} />
			)}
			{modalData.modalShow && modalData.modalType === 'adminView' && (
				<AdminView {...modalData.modalData} />
			)}
			{modalData.modalShow && modalData.modalType === 'adminEdit' && (
				<EditDeadline details={{ ...modalData.modalData }} />
			)}
			<nav className="p-5 ">
				<Nav />
			</nav>
			<section className="p-5 ">
				<Switch>
					<Route path="/" exact>
						<OverduePage />
					</Route>
					<Route path="/completed">
						<CompletedPage />
					</Route>
				</Switch>
			</section>
			<section className="p-5 ">
				<div className="hidden lg:block">
					<SelectPage />
				</div>
				<Switch>
					<Route path="/" exact>
						<UpcomingPage />
					</Route>
					<Route path="/completed">
						<CompletedPage />
					</Route>
				</Switch>
			</section>
		</BrowserRouter>
	)
}

export default App
