import React from 'react'

const Nav = () => {
	return (
		<nav>
			<p>Nav</p>
		</nav>
	)
}

class DeadlineText extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Nav/>
		);
	}
}

export default Nav
