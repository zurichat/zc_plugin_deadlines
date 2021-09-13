import React, { useContext } from 'react'

import 'react-activity/dist/Spinner.css'

import Layout from './layout/layout_index'
import { ModalContext } from '../context/ModalContext.jsx'

import ViewDeadline from '../components/__compat__/viewDeadline'
import NewDeadline from '../components/__compat__/newDeadline'

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
