import React, { useState } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const SelectPage = () => {
	const page_tags = ['Upcoming', 'Completed']
	const [value, setValue] = useState(null)

	return (
		<Menu as="div" className="dtw-w-full">
			<div>
				<Menu.Button className="dtw-w-full dtw-py-2 lg:dtw-pt-0 dtw-inline-flex dtw-items-center ">
					<p className="dtw-text-gray-800 dtw-font-bold dtw-mr-1">
						{value || 'Upcoming'}
					</p>
					<ChevronDownIcon
						className="dtw-w-4 dtw-h-4 dtw-text-gray-800"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Menu.Items className="dtw-absolute dtw-w-40 dtw-mt-2 dtw-divide-y dtw-rounded-md dtw-bg-white dtw-ring-1 dtw-ring-black dtw-ring-opacity-5 dtw-inline-flex dtw-flex-col">
				{page_tags.map((i, index) => (
					<Menu.Item key={index} onClick={() => setValue(i)}>
						{({ active }) =>
							i === 'Upcoming' ? (
								<Link to="/">
									<div
										className={`${
											active && 'dtw-bg-gray-400 dtw-bg-opacity-10'
										}  dtw-py-2 dtw-text-sm dtw-text-gray-400 dtw-text-center  dtw-flex-shrink-0`}
									>
										{i}
									</div>
								</Link>
							) : (
								<Link to="/completed">
									<div
										className={`${
											active && 'dtw-bg-gray-400 dtw-bg-opacity-10'
										}  dtw-py-2 dtw-text-sm dtw-text-gray-400 dtw-text-center  dtw-flex-shrink-0`}
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
