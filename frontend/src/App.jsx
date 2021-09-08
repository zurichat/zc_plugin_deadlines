import React, { useContext } from 'react'

import './scroll.css'
import 'react-activity/dist/Spinner.css'

import Layout from './layout'
import { ModalContext } from './context/ModalContext.jsx'

import ViewDeadline from './components/viewDeadline'
import NewDeadline from './components/newDeadline'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<>
			{modalData.modalShow && modalData.modalType === 'viewDeadline' ? (
				// This modalData object passed down is always undefined for some reason. Should be fixed
				<ViewDeadline modalData={modalData} />
			) : null}
			{modalData.modalShow && modalData.modalType === 'newDeadline' ? (
				// This modalData object passed down is always undefined for some reason. Should be fixed
				<NewDeadline modalData={modalData} />
			) : null}
			<Layout />
		</>
	)
}

export default App
