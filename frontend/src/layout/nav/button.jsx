import React,{useContext, useState} from 'react'
import NewDeadline from "../../components/newDeadline/index"

const Button = () => {
const [isDeadline, setIsDeadline]= useState(false)
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
