import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

const CreateNewDeadlineButton = (admin) => {
	const { modalData, setModalData } = useContext(ModalContext)
	return admin ? (
		<>
			<button
				className="dtw-w-30 dtw-bg-green-500 hover:dtw-bg-green-700 dtw-text-white dtw-py-2 dtw-px-4 dtw-rounded"
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
		<div className="dtw-hidden"></div>
	)
}

export default CreateNewDeadlineButton
