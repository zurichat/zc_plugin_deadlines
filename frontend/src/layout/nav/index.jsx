import React from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'

const Nav = () => {
	return (
		<nav className="px-5">
			<div className="flex justify-between py-6 w-4/6">
				<p className="font-bold mt-2 transform translate-y-6 md:translate-x-0 md:translate-y-0 text-xl">
					Deadlines
				</p>
				<div className="flex">
					<div className="mx-5 transform -translate-y-6 -translate-x-1/4 md:translate-x-0 md:translate-y-0 md:mx-5">
						<Searchbar />
					</div>
					<div className="mx-5 w-max transform translate-y-6 transform -translate-x-3/4 md:translate-x-0 md:translate-y-0 flex-grow-0">
						<Sortbar />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
