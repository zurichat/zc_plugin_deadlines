import React from 'react'
import { Link } from 'react-router-dom'
import greenNavBar from './greenNavBar'

const Nav = ({ ...props }) => {
	return (
		<>
			<Nav {...props}>
				<greenNavBar />
				<Link to="/" className="text-blue-500 mr-5">
					Upcoming
				</Link>
				<Link to="/overdue" className="text-blue-500 mx-5">
					Overdue
				</Link>
				<Link to="/completed" className="text-blue-500 mx-5">
					Completed
				</Link>
			</Nav>
		</>
	)
}

export default Nav
