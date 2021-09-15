import React, { useState } from 'react'

import { SearchIcon, FilterIcon } from '@heroicons/react/outline'

import Sortbar from './components/sort'
import Searchbar from './components/searchbar'
import CreateNewDeadlineButton from './components/button'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [active, setActive] = useState('Upcoming')
	const handleSetActive = (value) => {
		setActive(value)
	}
	const NavItem = ({ navText }) => {
		return (
			<div onClick={() => handleSetActive(navText)}>
				<p
					className={`${active === navText && 'pb-2 '}
					 md:text-gray-400 text-gray-800 font-bold`}
				>
					{navText}
				</p>
			</div>
		)
	}
	return (
		<nav className="space-y-1 md:space-y-0 mb-6">
			<div className="flex justify-between items-center">
				{/* the onclick events with blue line */}
				<div className="">
					<Link to="/">
						<NavItem navText="Upcoming" />
					</Link>
					<div className="">
						<CreateNewDeadlineButton />
					</div>
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

export default Nav
