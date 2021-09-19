import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import UpcomingPage from '../../pages/Upcoming'
import OverduePage from '../../pages/Overdue'

const Pages = () => {
	return (
		<div className="">
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="lg:border-b lg:pb-3 w-full py-2 lg:pt-0 inline-flex items-center ">
							<span className="text-gray-800 font-bold mr-1">Overdue</span>
							<ChevronUpIcon
								className={`${
									open ? 'transform rotate-180' : ''
								} w-4 h-4 text-gray-800`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="lg:py-2 lg:mt-4 mt-2 mb-6">
							<OverduePage />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="lg:border-b lg:pb-3 w-full py-2 lg:pt-0 inline-flex items-center ">
							<span className="text-gray-800 font-bold mr-1">Upcoming</span>
							<ChevronUpIcon
								className={`${
									open ? 'transform rotate-180' : ''
								} w-4 h-4 text-gray-800`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="lg:py-2 lg:mt-4 mt-2">
							<UpcomingPage />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	)
}

export default Pages
