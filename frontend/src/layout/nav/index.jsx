import React from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'

const Nav = () => {
	return (
		<nav className="px-5">
			<div className="flex justify-between py-5 md:w-4/6">
				<p className="font-bold text-xl">Deadlines</p>
				<div className="flex">
					<div className="hidden mx-5 md:block">
						<Searchbar />
					</div>
					<div className="md:mx-5 md:flex-grow-0">
						<Sortbar />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
