import React, { useState } from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import SetDeadlineButton from './button'

const Nav = () => {
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
		<nav className="space-y-1 md:space-y-0">
			<div className="flex justify-between py-5 items-center">
				<p className="font-bold text-2xl">Company Deadlines</p>
				<div className="hidden md:flex md:left-0 flex-col space-y-2 sm:space-y-0 sm:flex-row">
					{/* the onclick events with blue line */}
					<NavItem navText="Upcoming" />
					<NavItem navText="Overdue" />
					<NavItem navText="Completed" />
					<div className="sm:mx-1 lg:block">
						<Searchbar />
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
