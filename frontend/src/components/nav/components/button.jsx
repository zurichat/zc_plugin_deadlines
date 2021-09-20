import React, { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

const CreateNewDeadlineButton = (admin) => {
	const { modalData, setModalData } = useContext(ModalContext)
	return admin ? (
		<>
			<button
				className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded 'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '768px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }
          
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }"
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
