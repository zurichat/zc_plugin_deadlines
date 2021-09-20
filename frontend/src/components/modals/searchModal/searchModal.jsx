import React, { useContext } from 'react'
import DeadlineCard from '../../deadlineCard/index'
import { SearchContext } from '../../../context/searchContext/searchContext'

const SearchModal = () => {
	const searchResult = useContext(SearchContext)
	return (
		<div
			className={`${
				searchResult[0] ? 'absolute w-full min-h-full bg-white left-0' : ' '
			}`}
		>
			{searchResult[0] ? (
				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 ml-5">
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
				</div>
			) : null}
		</div>
	)
}

export default SearchModal
