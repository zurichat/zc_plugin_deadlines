import React from 'react'
import Sortbar from './sortbar'

const Nav = () => {
	return (
		<nav className="flex justify-evenly">
			<p className="font-bold text-xl">Deadlines</p>
			<div>
				<Sortbar />
			</div>
		</nav>
	)
}

export default Nav
