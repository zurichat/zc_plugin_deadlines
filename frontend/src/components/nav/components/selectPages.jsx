import React, { useState } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const SelectPage = () => {
	const page_tags = ['Upcoming', 'Completed']
	const [value, setValue] = useState(null)

	// const [active, setActive] = useState('Upcoming')
	// const handleSetActive = (value) => {
	// 	setActive(value)
	// }
	// const NavItem = ({ navText }) => {
	// 	return (
	// 		<div onClick={() => handleSetActive(navText)}>
	// 			<p
	// 				className={`${active === navText && 'pb-2 '}
	// 				 md:text-gray-400 text-gray-800 font-bold`}
	// 			>
	// 				{navText}
	// 			</p>
	// 		</div>
	// 	)
	// }

	return (
		<Menu as="div" className="w-full">
			<div>
				<Menu.Button className="w-full py-2 inline-flex items-center ">
					<p className="text-gray-800 font-bold mr-1">{value || 'Upcoming'}</p>
					<ChevronDownIcon
						className="w-4 h-4 text-gray-800"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Menu.Items className="absolute w-1/7 mt-2 divide-y rounded-md bg-white ring-1 ring-black ring-opacity-5 inline-flex flex-col">
				{page_tags.map((i, index) => (
					<Menu.Item key={index} onClick={() => setValue(i)}>
						{({ active }) =>
							i === 'Upcoming' ? (
								<Link to="/">
									<div
										className={`${
											active && 'bg-gray-400 bg-opacity-10'
										}  py-2 text-sm text-gray-400 text-center  flex-shrink-0`}
									>
										{i}
									</div>
								</Link>
							) : (
								<Link to="/completed">
									<div
										className={`${
											active && 'bg-gray-400 bg-opacity-10'
										}  py-2 text-sm text-gray-400 text-center  flex-shrink-0`}
									>
										{i}
									</div>
								</Link>
							)
						}
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	)
}

export default SelectPage
