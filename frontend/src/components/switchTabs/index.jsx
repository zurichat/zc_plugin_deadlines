import { React } from 'react'
import { Tab } from '@headlessui/react'

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ')
}

const SwitchTabs = () => {
	return (
		<Tab.Group as="div" className="w-full max-w-md  px-2 py-16 sm:px-0">
			<Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
				<Tab
					className={({ selected }) =>
						classNames(
							'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
							'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-grey',
							selected
								? 'bg-white shadow'
								: 'text-blue-100  hover:bg-white/[0.12] hover:text-white'
						)
					}
				>
					Completed
				</Tab>
				<Tab
					className={({ selected }) =>
						classNames(
							'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
							'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
							selected
								? 'bg-white shadow'
								: 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
						)
					}
				>
					Expired
				</Tab>
			</Tab.List>
			<Tab.Panels className="mt-2">
				<Tab.Panel
					className={classNames(
						'bg-white rounded-xl p-3',
						'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
					)}
				>
					Completed Tasks
				</Tab.Panel>
				<Tab.Panel
					className={classNames(
						'bg-white rounded-xl p-3',
						'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
					)}
				>
					Expired Tasks
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	)
}

export default SwitchTabs
