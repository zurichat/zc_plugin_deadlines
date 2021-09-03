import { React } from 'react'
import { Menu } from '@headlessui/react'

function MenuItem(props) {
	return (
		<Menu.Item>
			<button className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-100 ">
				{props.item}
			</button>
		</Menu.Item>
	)
}
const SortBar = () => {
	return (
		<div className="w-56 text-right fixed top-16 right-10">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						Sort
					</Menu.Button>
				</div>
				<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-4 py-1 ">
						<MenuItem item="Newest" />
						<MenuItem item="Oldest" />
						<MenuItem item="hahaah" />
					</div>
				</Menu.Items>
			</Menu>
		</div>
	)
}

export default SortBar
