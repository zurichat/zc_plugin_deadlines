import React from 'react'

import { SearchIcon, FilterIcon } from '@heroicons/react/outline'

import Sortbar from './components/sortbar'
import Searchbar from './components/searchbar'
import CreateNewDeadlineButton from './components/button'
import SelectPage from './components/selectPages'

const Nav = () => {
	return (
		<nav className="space-y-1 md:space-y-0   lg:border-b">
			<div className="flex flex-col lg:flex-row justify-between items-center">
				<div className="flex justify-between items-center w-full lg:w-auto">
					<div className="lg:hidden">
						<SelectPage />
					</div>
					<div className="flex">
						<SearchIcon className="lg:hidden text-gray-400 w-3.5 mr-3" />
						<FilterIcon className=" lg:hidden text-gray-400 w-3.5" />
					</div>
				</div>
				<div className="lg:hidden self-start">
					<CreateNewDeadlineButton />
				</div>

				<div className="flex justify-between ">
					<div className="hidden lg:block">
						<CreateNewDeadlineButton />
					</div>
					<div className=" flex ">
						<div className="hidden lg:block px-4">
							<Searchbar />
						</div>

						<div className="hidden lg:block ">
							<Sortbar />
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block">
				<SelectPage />
			</div>
		</nav>
	)
}

export default Nav
