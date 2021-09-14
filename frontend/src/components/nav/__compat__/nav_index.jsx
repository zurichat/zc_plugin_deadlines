import React, { useState } from 'react'

import {
	SearchIcon,
	FilterIcon,
	ChevronDownIcon,
} from '@heroicons/react/outline'

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
					className={`${
						active === navText && 'lg:border-b-2 border-blue-500 pb-2 '
					}
					 md:text-gray-400 text-gray-800 font-bold`}
				>
					{navText}
				</p>
			</div>
		)
	}
	return (
		<nav className="space-y-1 md:space-y-0 mb-6">
			<div className="flex justify-between py-5 items-center">
				<p className="font-bold text-2xl">Company Deadlines</p>
			</div>

			<div className="relative flex justify-between items-center">
				{/* the onclick events with blue line */}
				<div className="flex md:justify-between">
					<Link to="/">
						<NavItem navText="Upcoming" />
					</Link>
					<ChevronDownIcon
						className="lg:hidden w-4 h-4 ml-2 mr-2 mt-1 text-gray-800"
						aria-hidden="true"
					/>
					<Link to="/completed" className="hidden lg:block text-blue-500 mx-5">
						<NavItem navText="Completed" />
					</Link>
				</div>

				<div className="absolute -bottom-10 lg:static ">
					<SetDeadlineButton />
				</div>

				<div className="flex justify-between ">
					<div className=" flex ">
						<SearchIcon className="lg:hidden text-gray-400 w-3.5 mr-3" />

						<FilterIcon className=" lg:hidden text-gray-400 w-3.5" />

						<div className="hidden lg:block px-4">
							<Searchbar />
						</div>

						<div className="hidden lg:block ">
							<Sortbar />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
