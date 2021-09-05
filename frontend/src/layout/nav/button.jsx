import React from 'react'
import { ModalContext } from '../../context/ModalContext'
const Button = () => {
	const { modalData, setModalData } = useContext(ModalContext)
	return (
		<button
			className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
			onClick={() => {
				setModalData({ ...modalData, modalShow: true })
			}}
		>
			Set Deadline
		</button>
	)
}

export default Button
