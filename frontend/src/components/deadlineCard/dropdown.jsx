import React, { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { BsThreeDots } from 'react-icons/bs'
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { ModalContext } from '../../context/ModalContext'
import { useDeleteDeadline } from '../../api/reminders'

const DeadlineCardDropdown = ({ object_id }) => {
	const { setModalData } = useContext(ModalContext)
	const mutation = useDeleteDeadline()

	const editDeadline = () => {
		setModalData({
			modalShow: true,
			modalType: 'adminEdit',
			modalData: {
				object_id,
			},
		})
	}

	const deleteDeadline = () => {
		mutation.mutate(object_id)
	}

	return (
		<Menu>
			<Menu.Button className="mb-2 cursor-pointer self-end">
				<BsThreeDots className="text-black text-opacity-50" />
			</Menu.Button>
			<div className="relative">
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items
						as="ul"
						className="absolute right-0 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<Menu.Item as="li" className=" flex items-center">
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
									} group flex rounded-t-md items-center w-full px-4 py-2 gap-2`}
									onClick={editDeadline}
								>
									<BiEditAlt />
									Edit
								</button>
							)}
						</Menu.Item>
						<Menu.Item as="li" className=" flex items-center">
							{({ active }) => (
								<button
									className={`${
										active ? 'bg-red-500 text-white' : 'text-gray-900'
									} group flex rounded-b-md items-center w-full px-4 py-2 gap-2`}
									onClick={deleteDeadline}
								>
									<BiTrashAlt />
									Delete
								</button>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</div>
		</Menu>
	)
}

export default DeadlineCardDropdown
