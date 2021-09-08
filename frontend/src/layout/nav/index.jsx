import React, { useState } from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import SetDeadlineButton from './button'
import { useAllReminders } from '../../api/reminders'

const Nav = () => {
	const { fetchedData, isPlaceholderData } = useAllReminders()
	const [filterdeData, setFilteredData] = useState('')

	const searchfunction = (searchTerm) => {
		if (isPlaceholderData) {
			return
		} else {
			console.log(fetchedData.data.data)
			const sortedData = fetchedData.data.data.result.map((data) => {
				const { title, description } = data.payload
				return {
					title,
					description,
				}
			})

			if (searchTerm !== '') {
				const result = sortedData.filter((data) => {
					return (
						data.title.includes(searchTerm.toLowerCase()) ||
						data.title.includes(searchTerm.toupperCase()) ||
						data.description.includes(searchTerm.toLowerCase()) ||
						data.description.includes(searchTerm.toupperCase()) ||
						data.title.includes(searchTerm) ||
						data.description.includes(searchTerm)
					)
				})
				setFilteredData(result)
			} else {
				setFilteredData(null)
			}
		}
	}

	console.log(filterdeData)

	return (
		<nav className="space-y-1 md:space-y-0">
			<div className="flex justify-between py-5 items-center">
				<p className="font-bold text-2xl">Deadlines</p>
				<div className="hidden md:flex md:left-0 flex-col space-y-2 sm:space-y-0 sm:flex-row">
					<div className="sm:mx-1 lg:block">
						<Searchbar searchfunction={searchfunction} />
					</div>
					<div className="md:mx-5 md:flex-grow-0">
						<Sortbar />
					</div>
				</div>
				<div className="">
					<SetDeadlineButton />
				</div>
			</div>
			<div className="md:hidden flex flex-col space-y-2 sm:space-y-0 sm:flex-row">
				<div className="sm:mx-1 lg:block">
					<Searchbar />
				</div>
				<div className="md:mx-5 md:flex-grow-0">
					<Sortbar />
				</div>
			</div>
		</nav>
	)
}

export default Nav
