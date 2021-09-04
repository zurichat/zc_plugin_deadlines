import React from 'react'
import Button from './button'
import SearchInput from './SearchInput'
import Sortbar from './sortbar'
import DeadlineText from './text'

const Nav = () => {
	return (
		<nav className="m-5 items-center grid grid-cols-3 grid-rows-2 gap-y-4 md:flex md:justify-between ">
			<div className="flex justify-between md:grid md:grid-cols-7 md:w-3/5 md:gap-x-5 ">
				<div className="w-full md:col-end-3 md:col-start-1">
					<DeadlineText />
				</div>
				<div className="invisible md:visible md:col-start-4 md:col-end-7 md:min-w-2/3 md:justify-self-end">
					<SearchInput />
				</div>
				<div className="">
					<Sortbar />
				</div>
			</div>
			<div className="col-start-3 row-start-2">
				<Button />
			</div>
		</nav>
	)
}

export default Nav
