import React from 'react'
import SetDeadline from './Button.jsx'

const Nav = () => {
	return (
		<nav>
			<div className="static w-24 h-6 bg-green-600 font-semibold text-lg leading-7 text-white flex-none order-none flex-grow-0">
				<SetDeadline> Set Deadlines</SetDeadline>
			</div>
		</nav>
	)
}

export default Nav
