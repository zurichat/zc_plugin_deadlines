import React from 'react'

const Skeleton = ({ type, counter }) => {
	const COUNTER = counter || 5

	const TopMenuSkeleton = () => (
		<div className="w-full sm:w-2/3 md:w-1/3 flex  justify-between mt-5 mb-14 bg-gray-white p-2 rounded">
			<div className="w-36 h-5 bg-gray-200 mr-5 animate-pulse rounded"></div>
			<div className="w-36 h-5 bg-gray-200 mr-5 animate-pulse rounded"></div>
			<div className="w-36 h-5 bg-gray-200  animate-pulse rounded"></div>
		</div>
	)

	const CardSkeleton = () => (
		<div className="bg-gray-white border-2 p-4 rounded-2xl">
			<div className="flex h-5 flex-row justify-between mb-2 items-center">
				<div className="w-1/3 h-full bg-gray-200 animate-pulse rounded"></div>
				<div className="w-5 h-1/2 bg-gray-200 animate-pulse rounded"></div>
			</div>
			<div className="w-2/3 h-3 bg-gray-200 mb-5 animate-pulse rounded"></div>
			<div className="w-2/3 h-3 bg-gray-200 mb-1 animate-pulse rounded"></div>
			<div className="w-2/3 h-3 bg-gray-200 mb-3 animate-pulse rounded"></div>
			<div className="w-full h-1 bg-gray-200 mb-3 animate-pulse rounded"></div>
			<div className="w-full h-14 space-x-2 flex flex-row rounded">
				<div className="w-1/3 h-full bg-gray-50 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-300 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-300 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-300 animate-pulse rounded"></div>
					</div>
				</div>
				<div className="w-1/3 h-full bg-gray-50 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-300 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-300 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-300 animate-pulse rounded"></div>
					</div>
				</div>
				<div className="w-1/3 h-full bg-gray-50 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-300 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-300 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-300 animate-pulse rounded"></div>
					</div>
				</div>
			</div>
		</div>
	)

	if (type === 'top') return <TopMenuSkeleton />
	if (type === 'card')
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{Array(COUNTER).fill(<CardSkeleton />)}
			</div>
		)

	return (
		<div className="w-full h-full">
			{/* <TopMenuSkeleton /> */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{Array(COUNTER).fill(<CardSkeleton />)}
			</div>
		</div>
	)
}

export default Skeleton
