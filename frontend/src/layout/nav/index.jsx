import React from 'react'
import Sortbar from './sortbar'
import Searchbar from './searchbar'
import Modal from '../../components/modal'

const Nav = () => {
	return (
		<nav className="px-5">
			<div className="flex justify-between py-5 w-4/6">
				<p className="font-bold text-xl">Deadlines</p>
				<div className="flex">
					<div className="mx-5">
						<Searchbar />
					</div>
					<div className="mx-5  flex-grow-0">
						<Sortbar />
					</div>
					<div className="ml-24">
						<Modal />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
