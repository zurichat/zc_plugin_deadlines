import React, { useState } from 'react'

import { SearchIcon, FilterIcon } from '@heroicons/react/outline'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import SetDeadlineButton from './button'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [active, setActive] = useState('Upcoming')
	const handleSetActive = (value) => {
		setActive(value)
	}
	const NavItem = ({ navText }) => {
		return (
			<div onClick={() => handleSetActive(navText)}>
				<p
					className={`${active === navText && 'underline pb-2 text-blue-500'}
					 text-gray-400`}
				>
					{navText}
				</p>
			</div>
		)
	}
	return (
		<nav className="space-y-1 md:space-y-0 mb-4">
			<div className="flex justify-between py-5 items-center">
				<p className="font-bold text-2xl">Company Deadlines</p>
			</div>

			<div className="relative flex justify-between">
				{/* the onclick events with blue line */}
				<div className="md:flex md:justify-between">
					<Link to="/">
						<NavItem navText="Upcoming" />
					</Link>
					<Link to="/overdue" className="hidden text-blue-500 mx-5">
						<NavItem navText="Overdue" />
					</Link>
					<Link to="/completed" className="hidden text-blue-500 mx-5">
						<NavItem navText="Completed" />
					</Link>
				</div>

				<div className="absolute -bottom-2">
					<SetDeadlineButton />
				</div>

				<div className=" flex ">
					<SearchIcon className="md:hidden text-gray-400 w-3.5 mr-3" />

					<FilterIcon className=" md:hidden text-gray-400 w-3.5" />

					<div className="hidden lg:block">
						<Searchbar />
					</div>

					<div className="hidden md:flex-grow-0">
						<Sortbar />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
