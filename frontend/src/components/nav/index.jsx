import React from 'react'
import Sortbar from './sortbar'

const Nav = ({ ...props }) => {
	// Use this set sort function in the sort selector to change sort order in component
	// const { sort, setSort } = useContext(SortContext)

	return (
		<nav {...props}>
			<Sortbar />
		</nav>
	)
}

export default Nav
