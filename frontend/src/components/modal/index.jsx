import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XIcon } from '@heroicons/react/solid'

const Modal = ({ title, children, ...props }) => {
	const [isOpen, setIsOpen] = useState(false)

	const closeModal = () => setIsOpen(false)

	const openModal = () => setIsOpen(true)

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Open dialog model
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-7 overflow-y-auto backdrop-filter backdrop-blur backdrop-brightness-50 "
					onClose={closeModal}
					{...props}
				>
					<div className="min-h-screen min-w-screen px-4 text-center ">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0  " />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
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
							<div className="inline-block h-3/4 w-3/5 max-w-5xl max-h-52 my-0 overflow- align-middle transition-all transform bg-white shadow-xl rounded-md z-30">
								<Dialog.Title
									as="div"
									className="m-0 ml-0 mr-0 w-full font-medium leading-6 text-green  bg-brand-primary p-5 flex items-center justify-between rounded-t-lg"
								>
									<p className="text-white text-xl">{title}</p>
									<button
										className="m-0 w-10 h-10 rounded-full bg-white text-brand-primary hover:text-brand-error text-center"
										onClick={closeModal}
									>
										<XIcon className="h-5 w-5 m-auto" />
									</button>
								</Dialog.Title>
								<div className="mt-2 w-full h-full p-5">
									{children || <h4>Insert modal content </h4>}
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default Modal
