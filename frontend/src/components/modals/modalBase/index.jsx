import React from 'react'

const ModalBase = ({ children, title }) => {
	console.log('Mounted')
	return (
		<div
			id="modal-container"
			className="absolute w-full h-screen flex backdrop-filter backdrop-blur backdrop-brightness-50"
		>
			<div className="bg-white w-6/7 md:w-3/5 m-auto rounded-4xl ">
				<div className="font-medium leading-6 bg-brand-primary p-5 flex items-center justify-between text-white rounded-t-4xl">
					<h3>{title}</h3>
				</div>
				<div id="modal-child" className="">
					{children}
				</div>
			</div>
		</div>
	)
}

export default ModalBase
