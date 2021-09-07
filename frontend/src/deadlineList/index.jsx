import React from 'react'
import ListCard from './components/listCard'

// Prop drilling, should be improved.

const DeadlineContainer = () => {
	return (
		<div className="w-full border-b-1/2 mt-5">
			<ListCard />
		</div>
	)
}

export default DeadlineContainer
