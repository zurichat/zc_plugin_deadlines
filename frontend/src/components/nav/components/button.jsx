import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

const CreateNewDeadlineButton = (admin) => {
	const { modalData, setModalData } = useContext(ModalContext)
	return admin ? (
		<>
			<button
				className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
				onClick={() =>
					setModalData({
						...modalData,
						modalShow: true,
						modalType: 'adminCreate',
					})
				}
			>
				+ Create New Deadline
			</button>
		</>
	) : (
		<div className="hidden"></div>
	)
}

export default CreateNewDeadlineButton
