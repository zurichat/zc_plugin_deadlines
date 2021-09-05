// import React, { useContext } from 'react'
import React from 'react'

// import Layout from './layout'
// import ViewDeadline from './components/viewDeadline'
// import { ModalContext } from './context/ModalContext.jsx'
import ReminderToggle from './components/newDeadline/components/reminder-toggle'

import './scroll.css'

const App = () => {
	// const { modalData } = useContext(ModalContext || {})

	return (
		// <>
		// 	{modalData.modalShow ? <ViewDeadline modalData={modalData} /> : null}
		// 	<Layout />
		// </>
		<ReminderToggle />
	)
}

export default App
