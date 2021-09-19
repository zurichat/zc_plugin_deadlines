import React, { useContext, cloneElement } from 'react'
import { ModalContext } from '../../../context/ModalContext'

const ModalBase = ({ children, title }) => {
	const { modalData, setModalData } = useContext(ModalContext)
	const closeModal = () => setModalData({ ...modalData, modalShow: false })

	return (
		<div
			id="modal-container"
			className="dtw-fixed dtw-top-0 dtw-w-full dtw-h-screen dtw-flex dtw-backdrop-filter dtw-backdrop-blur dtw-backdrop-brightness-50 dtw-z-50"
		>
			<div
				id="overlay"
				onClick={closeModal}
				className="dtw-absolute dtw-h-screen dtw-w-full dtw--z-10"
			/>
			<div className="dtw-bg-white dtw-w-6/7 md:dtw-w-3/5 dtw-m-auto">
				<div className="dtw-font-medium dtw-leading-6 dtw-py-6 dtw-px-7 dtw-flex dtw-items-center dtw-justify-between">
					<h3>{title}</h3>
				</div>
				<div id="modal-child" className="dtw-px-7 dtw-py-8">
					{/* Pass close function down */}
					{cloneElement(children, { closeModal })}
				</div>
			</div>
		</div>
	)
}

export default ModalBase
