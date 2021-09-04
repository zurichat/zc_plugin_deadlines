/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react'

const Nav = () => {
	return (
		<nav>
			<p>Nav</p>
		</nav>
	)
}

// eslint-disable-next-line unused-imports/no-unused-vars
class DeadlineText extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Nav />
	}
}

export default Nav
