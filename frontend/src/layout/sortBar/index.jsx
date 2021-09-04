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
		<Menu as="div" className="w-36 inline-block text-left">
			<Menu.Button
				as="input"
				className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				type="button"
				value="Sort"
			/>
			<Menu.Items className="w-56 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
				<MenuItem item="Date ascending" />
				<MenuItem item="Date descending" />
				<MenuItem item="Time ascending" />
				<MenuItem item="Time descending" />
			</Menu.Items>
		</Menu>
	)
}

export default SortBar
