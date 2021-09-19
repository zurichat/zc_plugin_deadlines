import React, { useContext } from 'react'
import DeadlineCard from '../../deadlineCard/index'
import { SearchContext } from '../../../context/searchContext/searchContext'

const SearchModal = () => {
	const searchResult = useContext(SearchContext)
	console.log(searchResult, 'searchModal')
	return (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{searchResult[0]
				? searchResult[0].map((result) => (
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
				  ))
				: null}
			{/* {searchResult.map((result) => (
				<div key={result.object_id}>
					<DeadlineCard
						title={result.title}
						description={result.description}
						// assigner={result.creator.userName}
						// assignees={result.assignee.channelName}
						startDate={result.startDate}
						dueDate={result.dueDate}
						priority={result.priority}
						object_id={result.object_id}
					/>
				</div>
			))} */}
		</div>
	)
}

export default SearchModal
