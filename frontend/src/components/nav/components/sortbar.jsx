import React, { useContext } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { SortContext } from '../../sort'

const Sortbar = () => {
	const { setSort } = useContext(SortContext)
	const sort_tags = [
		'Newest to Oldest',
		'Oldest to Newest',
		'Due Date (Ascending)',
		'Due Date (Descending)',
	]
	const handleSort = (i) => {
		setSort(i)
	}

	return (
		<Menu as="div" className="text-sm">
			<div>
				<Menu.Button className="border rounded py-2.5 px-5 inline-flex items-center">
					<p className="text-gray-400 pr-3">{`Sort by: Newest to Oldest`}</p>
					<ChevronDownIcon
						className="w-5 h-5 ml-2 text-gray-400"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Menu.Items className="absolute mt-2 divide-y rounded-lg bg-white ring-1 ring-black ring-opacity-5 inline-flex flex-col shadow-lg">
				{sort_tags.map((i, index) => (
					<Menu.Item key={index} onClick={() => handleSort(i)}>
						{({ active }) => (
							<div
								className={`${
									active && 'bg-gray-400 bg-opacity-10'
								} px-5 py-1.5 text-sm text-gray-400 text-center flex-shrink-0`}
							>
								{i}
							</div>
						)}
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	)
}

export default Sortbar
