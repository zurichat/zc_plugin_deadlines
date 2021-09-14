import React from 'react'

const ModalTest = ({ closeFunction, modalShow, title, children }) => {
	const scale = modalShow ? 'transform scale-100' : ''

	return (
		<div
			className="modal h-screen w-screen bg-black bg-opacity-90 fixed top-0 left-0 z-10"
			onClick={closeFunction}
		>
			<div
				className={` w-2/4 h-auto ${scale} 'transform scale-50' ml-auto  mr-auto mt-20 mb-20 bg-white rounded-2xl flex flex-col overflow-hidden`}
				style={{ transition: 'all .3s' }}
			>
				<div className="bg-brand-primary text-white pl-4 h-12 flex items-center bg-green-50">
					<h3>{title}</h3>
				</div>
				<div className="modal-body bg-white flex-1 py-5 px-5">{children}</div>
			</div>
		</div>
	)
}

export default ModalTest
