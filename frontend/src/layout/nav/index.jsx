import React from 'react'
import Sortbar from './sortbar'

const Nav = () => {
	return (
		<nav className="flex justify-between w-40 md:justify-evenly md:w-full">
			<p className="font-bold text-xl">Deadlines</p>
			<div>
				<Sortbar />
			</div>
		</nav>
	)
}

export default Nav
