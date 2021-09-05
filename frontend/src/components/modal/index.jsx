// TODO - Click outside modal catches all pointer events including those meant for the modal. Probably a z-index issue. Disabled until fixed

import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { XIcon } from '@heroicons/react/solid'
// import Button from '../../layout/nav/button'

const Modal = ({ title, children, ...props }) => {
	// Clunky and should be updated to use local state

	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(true)

	const openModal = () => setIsOpen(true)

	return (
		<>
			{/* <Button type="button" onClick={openModal} /> */}
			<button
				type="button"
				onClick={openModal}
				className="w-30 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
			>
				Set Deadline
			</button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					// initialFocus={elementRef}
					className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-blur backdrop-brightness-50 cursor-default"
					onClose={closeModal}
					{...props}
				>
					<div className="min-h-screen min-w-screen text-center ">
						<Transition.Child
							as={'div'}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							{/* <Dialog.Overlay
								className="fixed inset-0"
								onClick={() => closeModal()}
							/> */}
						</Transition.Child>

						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="inline-block w-5/6 md:w-3/5 max-w-5xl align-middle transition-all bg-white shadow-xl rounded-lg">
								<Dialog.Title
									as="h3"
									className="w-full font-medium leading-6 bg-brand-primary p-5 flex items-center justify-between rounded-t-lg"
								>
									<p className="text-white text-xl">{title}</p>
									<button
										className="m-0 w-10 h-10 rounded-full bg-white text-brand-primary hover:text-brand-error text-center"
										onClick={closeModal}
									>
										<XIcon className="h-5 w-5 m-auto" />
									</button>
								</Dialog.Title>
								<div className="mt-2 w-full h-full p-5">{children}</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Modal
