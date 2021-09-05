import React from 'react'

const TabNav = ({ tabs, setSelected, selected, children }) => {
	return (
		<div>
			<div className="content-center ">
				<ul className="flex items-center mb-3 font-bold cursor-pointer text-lg">
					{tabs &&
						tabs.map((tab) => {
							const active =
								tab === selected ? 'active border-b-2 border-brand-primary' : ''
							return (
								<li className="-mb-px" key={tab}>
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
