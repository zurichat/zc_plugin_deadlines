import React from 'react'

const TabNav = ({ tabs, setSelected, selected, children }) => {
	return (
		<div>
			<div className="content-center ">
				<ul className="flex items-center mt-15 mb-10 font-bold cursor-pointer text-lg">
					{tabs &&
						tabs.map((tab) => {
							const active =
								tab === selected ? 'active border-b-2 border-brand-primary' : ''
							return (
								<li className="-mb-px mr-1" key={tab}>
									<a
										className={`bg-white inline-block py-2 px-4 text-black-900 ${active}`}
										onClick={() => setSelected(tab)}
									>
										{tab}
									</a>
								</li>
							)
						})}
				</ul>
				{children}
			</div>
		</div>
	)
}

export default TabNav
