import React, { useContext } from 'react'

import Layout from './layout'
import ViewDeadline from './components/viewDeadline'
import { ModalContext } from './context/ModalContext.jsx'

const App = () => {
	const { modalData } = useContext(ModalContext || {})

	return (
		<>
			{modalData.modalShow ? <ViewDeadline modalData={modalData} /> : null}
			<Layout />
		</>
	)
}

export default App
