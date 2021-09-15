import React from 'react'

import { SearchIcon, FilterIcon } from '@heroicons/react/outline'

import Sortbar from './components/sort'
import Searchbar from './components/searchbar'
import CreateNewDeadlineButton from './components/button'
import SelectPage from './components/selectPages'

const Nav = () => {
	return (
		<nav className="space-y-1 md:space-y-0 mb-6">
			<div className="flex justify-between items-center">
				<div className="">
					<SelectPage />
					<div className="">
						<CreateNewDeadlineButton />
					</div>
				</div>

				<div className="flex justify-between ">
					<div className=" flex ">
						<SearchIcon className="lg:hidden text-gray-400 w-3.5 mr-3" />

						<FilterIcon className=" lg:hidden text-gray-400 w-3.5" />

						<div className="hidden lg:block px-4">
							<Searchbar />
						</div>

						<div className="hidden lg:block ">
							<Sortbar />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
