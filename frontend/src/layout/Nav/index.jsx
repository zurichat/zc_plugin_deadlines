import React from 'react'
import Search from './SeachInput'
import Drop from './Dropdown'

const Nav = () => {
	return (
		<div className="flex mt-4">
			<Search />
			<Drop />
		</div>
	)
}

export default Nav
