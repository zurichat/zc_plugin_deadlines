import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import root from 'react-shadow'

import Nav from './components/nav'
import Pages from './components/nav/pages'
import { ModalContext } from './context/ModalContext'
import NewDeadline from './components/modals/admin/newDeadline'
import UserViewDeadline from './components/modals/user/userViewDeadline/userView'
import EditDeadline from './components/modals/admin/editDeadline/editDeadline'
import AdminView from './components/modals/admin/viewDeadline/adminView'
import AdminViewOther from './components/modals/admin/adminViewOther'

import tailIndex from './styles/index.css'
import scrollIndex from './styles/scroll.css'
import imo from './styles/imo.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<root.div>
			<style>
				<style type="text/css">{tailIndex.toString()}</style>
				<style type="text/css">{scrollIndex.toString()}</style>
				<style type="text/css">{imo.toString()}</style>
				{/* <style type="text/css">{toastify.toString()}</style> */}
			</style>
			<BrowserRouter basename="/deadlines">
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
					<EditDeadline {...modalData.modalData} />
				)}
				{modalData.modalShow && modalData.modalType === 'adminViewOther' && (
					<AdminViewOther {...modalData.modalData} />
				)}
				<ToastContainer
					position="top-center"
					autoClose={3000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<nav className="pt-5 px-5 pb-0  ">
					<Nav />
				</nav>
				<main className="p-5 ">
					<Pages />
				</main>
			</BrowserRouter>
		</root.div>
	)
}

export default App
