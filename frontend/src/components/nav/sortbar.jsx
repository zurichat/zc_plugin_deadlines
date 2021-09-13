import React, { useContext } from 'react'

import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { RemindersContext } from '../../context/RemindersContext'
import { SortContext } from '../sort'

const Sortbar = () => {
	const sort_tags = [
		'Piority',
		'Newest',
		'Oldest',
		'Most urgent',
		'Least urgent',
	]
	const { dispatch, actionTypes, initialData } = useContext(RemindersContext)
	const { sort, setSort } = useContext(SortContext)

	const handleSort = (i) => {
		setSort(i)
		const getDate = (a) => {
			return new Date(a).getTime()
		}

		const sortData = (array, sort) => {
			switch (sort) {
				case 'Piority':
					return
				case 'Newest':
					return
				case 'Oldest':
					return
				case 'Most urgent':
					return array.sort((a, b) => getDate(a.dueDate) - getDate(b.dueDate))
				case 'Least urgent':
					return array.sort((a, b) => getDate(b.dueDate) - getDate(b.dueDate))
			}
		}

		const sortResults = sortData(initialData, sort)
		console.log(sortResults)

		dispatch({
			type: actionTypes.SORT,
			payload: { sortResults },
		})
		console.log(
			dispatch({
				type: actionTypes.SORT,
				payload: { sortResults },
			})
		)
	}

	return (
		<Menu as="div" className="w-full">
			<div>
				<Menu.Button className="border rounded w-full py-2 px-5 inline-flex items-center ">
					<p className="text-gray-400">{sort || 'Sort by: Date, time'}</p>
					<ChevronDownIcon
						className="w-5 h-5 ml-2 -mr-1  text-gray-400"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>
			<Menu.Items className="absolute mt-2 divide-y rounded-md bg-white ring-1 ring-black ring-opacity-5 inline-flex flex-col">
				{sort_tags.map((i, index) => (
					<Menu.Item key={index} onClick={() => handleSort(i)}>
						{({ active }) => (
							<div
								className={`${
									active && 'bg-gray-400 bg-opacity-10'
								} px-14 py-2 text-sm text-gray-400 text-center  flex-shrink-0`}
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
