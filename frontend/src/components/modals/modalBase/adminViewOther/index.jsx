// TODO - Click outside modal catches all pointer events including those meant for the modal. Probably a z-index issue. Disabled until fixed

import React from 'react'

// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
// import { XIcon } from '@heroicons/react/solid'
// import { ModalContext } from '../../context/ModalContext'

const Modal = ({
	title,
	description,
	startDate,
	dueDate,
	assigner,
	assignee,
	assignerAvatar,
	children,
	...props
}) => {
	return (
		<>
			<div className="border-2 m-3 rounded-lg">
				<div className="text-white font-bold rounded-t-md text-left bg-green-600 p-3 px-5">
					{title}
				</div>
				<div className="p-6">
					<h2 className="text-gray-900 mb-2 font-bold">Description</h2>
					<p className="text-gray-800">{description}</p>
					<div className="mt-6 flex justify-start align-middle">
						<div className="pr-6">
							<h3 className="font-bold">Start date</h3>
							<p className="text-gray-600">Some date</p>
						</div>
						<div className="pr-6">
							<h3 className="font-bold">Due date</h3>
							<p className="text-gray-600">Some date</p>
						</div>
						<div className="pr-6">
							<h3 className="font-bold">Due in</h3>
							<p className="text-red-600">Some date</p>
						</div>
					</div>
					<div className="start mt-6">
						<h3 className="font-bold">Asssigned to</h3>
						<p className="text-gray-600">Some dude</p>
					</div>
					<div className="start mt-6">
						<h3 className="font-bold">Asssigned by</h3>
						<div className="flex">
							<p>avatar</p>
							<p className="text-gray-600 pl-5">Some admin</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
