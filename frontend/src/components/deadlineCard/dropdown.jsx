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
			<Menu.Button className="dtw-mb-2 dtw-cursor-pointer dtw-self-end">
				<BsThreeDots className="dtw-text-black dtw-text-opacity-50" />
			</Menu.Button>
			<div className="dtw-relative">
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
						className="dtw-absolute dtw-right-0 dtw-origin-top-right dtw-bg-white dtw-divide-y dtw-divide-gray-100 dtw-rounded-md dtw-shadow-lg dtw-ring-1 dtw-ring-black dtw-ring-opacity-5 focus:dtw-outline-none"
					>
						<Menu.Item as="li" className=" dtw-flex dtw-items-center">
							{({ active }) => (
								<button
									className={`${
										active
											? 'dtw-bg-gray-100 dtw-text-gray-900'
											: 'dtw-text-gray-900'
									} group dtw-flex rounded-t-md dtw-items-center dtw-w-full dtw-px-4 dtw-py-2 dtw-gap-2`}
									onClick={editDeadline}
								>
									<BiEditAlt />
									Edit
								</button>
							)}
						</Menu.Item>
						<Menu.Item as="li" className=" dtw-flex dtw-items-center">
							{({ active }) => (
								<button
									className={`${
										active
											? 'dtw-bg-red-500 dtw-text-white'
											: 'dtw-text-gray-900'
									} group dtw-flex dtw-rounded-b-md dtw-items-center dtw-w-full dtw-px-4 dtw-py-2 dtw-gap-2`}
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
