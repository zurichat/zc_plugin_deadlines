import React from 'react'

const Nav = ({ ...props }) => {
	// Use this set sort function in the sort selector to change sort order in component
	// const { sort, setSort } = useContext(SortContext)

	return (
		<nav {...props}>
			<p>Nav</p>
		</nav>
	)
}

export default Nav
