import React, { useContext } from 'react'
import DeadlineCard from '../../deadlineCard/index'
import { SearchContext } from '../../../context/searchContext/searchContext'

const SearchModal = () => {
	const searchResult = useContext(SearchContext)
	console.log(searchResult[1], 'searchModal')
	return (
		<>
			{searchResult[0].map((result) => (
				<div key={result.object_id}>
					<DeadlineCard
						title={result.title}
						description={result.description}
						assigner={result.creator.userName}
						assignees={result.assignee.channelName}
						startDate={result.startDate}
						dueDate={result.dueDate}
						priority={result.priority}
						object_id={result.object_id}
					/>
				</div>
			))}
		</>
	)
}

export default SearchModal