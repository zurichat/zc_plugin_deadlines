import React, {useState, Fragment} from 'react'
import { Dialog, Transition} from '@headlessui/react'

const Modal = () => {
	let [isOpen, setIsOpen]=  useState(true)
	const openModal =()=>setIsOpen(true)
	const closeModal =()=>setIsOpen(false)
	return (<>
		
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

			<div>Reusable Modal</div>
			</div>
			</Dialog>
			</Transition>
		</>
	)
}

export default Modal
