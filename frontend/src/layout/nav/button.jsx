import React,{useContext, useState} from 'react'
import NewDeadline from "../../components/newDeadline/index"
import ModalContext from "../../context/modalContext'
const Button = () => {
const {showModal, setShowModal}= ModalContext()
	return (<>
		<button
			className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
			onClick={() => setShowModal(true)} >
			Set Deadline
		</button>
{isDeadline && <NewDeadline/>}
</>
	)
}

export default Button
