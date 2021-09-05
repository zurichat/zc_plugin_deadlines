import React, { useContext } from 'react'
import './scroll.css'

import Layout from './layout'
import { ModalContext } from './context/ModalContext.jsx'

import ViewDeadline from './components/viewDeadline'
import NewDeadline from './components/newDeadline'

const App = () => {
	const { modalData } = useContext(ModalContext)

	return (
		<>
			{modalData.modalShow && modalData.modalType === 'viewDeadline' ? (
				<ViewDeadline modalData={modalData} />
			) : null}
			{modalData.modalShow && modalData.modalType === 'newDeadline' ? (
				<NewDeadline modalData={modalData} />
			) : null}
			<Layout />
		</>
	)
}

export default App
