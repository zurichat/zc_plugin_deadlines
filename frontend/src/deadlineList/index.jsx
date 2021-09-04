import React from 'react'

import ListCard from './listCard'

const DeadlineContainer = ({}) => {
	const n = 7

	//Logic to render card multiple times
	return (
		<div>
			{[...Array(n)].map((value, index) => (
				<div className="w-full border-b-1/2 mt-5" key={index}>
					<ListCard />
				</div>
			))}
		</div>
	)
}

export default DeadlineContainer
