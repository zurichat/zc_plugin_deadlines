import React from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import Button from './button'

const Nav = () => {
	return (
		<nav className="px-5 space-y-1">
			<div className="flex justify-between py-5 md:w-4/6 items-center">
				<p className="font-bold text-xl">Deadlines</p>
				<div className="flex justify-end md:absolute md:right-6 md:top-5 xl:right-5">
					<Button />
				</div>
			</div>
			<div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row">
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
