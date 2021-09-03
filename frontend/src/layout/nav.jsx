import React from 'react'
import Dropdowntiles from './dropdowntiles'

const Nav = () => {
		 let sort_tags = ['Newest', 'Oldest', 'Most frequently updated', 'Least frequently updated'];
	return (
		<nav>
		  {sort_tags.map(i => <Dropdowntiles sort_tag = {i} key={i}/>)} 	
		</nav>
	)
}

export default Nav
