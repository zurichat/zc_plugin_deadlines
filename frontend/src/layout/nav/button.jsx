import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

const NewDeadlineButton = () => {
	const { modalData, setModalData } = useContext(ModalContext)
	return (
		<>
			<button
				className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
				onClick={() =>
					setModalData({
						...modalData,
						modalShow: true,
						modalType: 'newDeadline',
					})
				}
			>
				Set Deadline
			</button>
		</>
	)
}

export default NewDeadlineButton
