import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Sortbar = ()=> {
    let sort_tags = ['Newest', 'Oldest', 'Most frequently updated', 'Least frequently updated']

    return (
      <Menu as="div">
          <div>
        <Menu.Button className="justify-center inline-flex w-1/8 px-4 py-2 text-sm text-gray-400 rounded-sm focus-visible:ring-2 
        focus-visible:ring-gray border border-gray-400">
            Sort by: Date, time
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1  text-gray-400"
              aria-hidden="true"
            />
            </Menu.Button>
        </div>
        <Menu.Items className="absolute right-1/2 -right-1/12 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg 
        ring-1 ring-black ring-opacity-5 focus:outline-none">
            {sort_tags.map(i=><Menu.Item>{({active})=> (<p className={`${active && 'bg-gray-400 bg-opacity-10'} px py-2 text-sm text-gray-400`}>{i}</p>)}</Menu.Item>)}
        </Menu.Items>
      </Menu>
    )
  }

  export default Sortbar;