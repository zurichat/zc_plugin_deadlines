import React, { useContext, useState } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { RemindersContext } from '../../../context/RemindersContext'

const Sortbar = () => {
	const sort_tags = [
		'Piority',
		'Newest to Oldest',
		'Oldest to Newest',
		'Due Date (Ascending)',
		'Due Date (Descending)',
	]
	const { dispatch, actionTypes, initialData } = useContext(RemindersContext)
	const [value, setValue] = useState('')

	const handleSort = (i) => {
		setValue(i)
		const getDate = (a) => {
			return new Date(a).getTime()
		}

		const sortData = (array, value) => {
			switch (value) {
				case 'Piority':
					return array.sort((a, b) => b.piority - a.piority)
				case 'Newest to Oldest':
					return array.sort(
						(a, b) => getDate(b.startDate) - getDate(a.startDate)
					)
				case 'Oldest to Newest':
					return array.sort(
						(a, b) => getDate(a.startDate) - getDate(b.startDate)
					)
				case 'Due Date (Ascending)':
					return array.sort((a, b) => getDate(a.dueDate) - getDate(b.dueDate))
				case 'Due Date (Descending)':
					return array.sort((a, b) => getDate(b.dueDate) - getDate(b.dueDate))
			}
		}

		const sortResults = sortData(initialData, value)

		dispatch({
			type: actionTypes.SORT,
			payload: { sortResults },
		})
	}

	return (
		<Menu as="div" className="text-sm">
			<div>
				<Menu.Button className="border rounded py-2.5 px-5 inline-flex items-center">
					<p className="text-gray-400 pr-3">{`Sort by: ${
						value || 'Newest to Oldest'
					}`}</p>
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
