import React from 'react'
import { XCircleIcon } from '@heroicons/react/solid'

const Modal = ({ modalTitle }) => {
	return (
		<section className="rounded-md">
			<header className="flex justify-between items-center bg-green-500 lg:bg-white lg:text-black text-white px-4 pt-5 pb-8 lg:p-8 lg:pb-16 rounded-t-lg lg:rounded-none">
				<h2 className="text-lg lg:text-2xl font-medium">{modalTitle}</h2>
				<XCircleIcon className="w-6 h-6 lg:w-10 lg:h-10 stroke-current stroke-1 lg:bg-white lg:text-green-500 lg:rounded-full" />
			</header>

			<div></div>
		</section>
	)
}

export default Modal
