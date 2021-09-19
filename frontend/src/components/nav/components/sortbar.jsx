import React, { useState } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
// import { RemindersContext } from '../../../context/RemindersContext'

const Sortbar = () => {
	const sort_tags = [
		'Piority',
		'Newest to Oldest',
		'Oldest to Newest',
		'Due Date (Ascending)',
		'Due Date (Descending)',
	]
	// const { dispatch, actionTypes, initialData } = useContext(RemindersContext)
	const [value] = useState('')

	//  const handleSort = (i) => {
	// 	setValue(i)
	// 	const getDate = (a) => {
	// 		return new Date(a).getTime()
	// 	}

	// 	const sortData = (array, value) => {
	// 		switch (value) {
	// 			case 'Piority':
	// 				return array.sort((a, b) => b.piority - a.piority)
	// 			case 'Newest to Oldest':
	// 				return array.sort(
	// 					(a, b) => getDate(b.startDate) - getDate(a.startDate)
	// 				)
	// 			case 'Oldest to Newest':
	// 				return array.sort(
	// 					(a, b) => getDate(a.startDate) - getDate(b.startDate)
	// 				)
	// 			case 'Due Date (Ascending)':
	// 				return array.sort((a, b) => getDate(a.dueDate) - getDate(b.dueDate))
	// 			case 'Due Date (Descending)':
	// 				return array.sort((a, b) => getDate(b.dueDate) - getDate(b.dueDate))
	// 		}
	// 	}

	// 	const sortResults = sortData(initialData, value)

	// 	dispatch({
	// 		type: actionTypes.SORT,
	// 		payload: { sortResults },
	// 	})
	// }

	return (
		<Menu as="div" className="dtw-text-sm">
			<div>
				<Menu.Button className="dtw-border dtw-rounded dtw-py-2.5 dtw-px-5 dtw-inline-flex dtw-items-center">
					<p className="dtw-text-gray-400 dtw-pr-3">{`Sort by: ${
						value || 'Newest to Oldest'
					}`}</p>
					<ChevronDownIcon
						className="dtw-w-5 dtw-h-5 dtw-ml-2 dtw-text-gray-400"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Menu.Items className="dtw-absolute dtw-mt-2 dtw-divide-y dtw-rounded-lg dtw-bg-white dtw-ring-1 dtw-ring-black dtw-ring-opacity-5 dtw-inline-flex dtw-flex-col dtw-shadow-lg">
				{sort_tags.map((i, index) => (
					<Menu.Item key={index} onClick={() => null}>
						{({ active }) => (
							<div
								className={`${
									active && 'bg-gray-400 bg-opacity-10'
								} dtw-px-5 py-1.5 dtw-text-sm dtw-text-gray-400 text-center flex-shrink-0`}
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
