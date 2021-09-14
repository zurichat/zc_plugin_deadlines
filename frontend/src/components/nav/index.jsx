import React from 'react'
import Navbar from './__compat__/nav_index'

const Nav = ({ ...props }) => {
	return (
		<nav {...props}>
			<Navbar />
		</nav>
	)
}

export default Nav
