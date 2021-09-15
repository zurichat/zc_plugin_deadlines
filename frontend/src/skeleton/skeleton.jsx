import React from 'react'

const Skeleton = ({ type }) => {
	const COUNTER = 8

	const TopMenuSkeleton = () => (
		<div className="w-full sm:w-2/3 md:w-1/3 flex  justify-between mt-5 mb-14 bg-gray-100 p-2 rounded">
			<div className="w-36 h-5 bg-gray-400 mr-5 animate-pulse rounded"></div>
			<div className="w-36 h-5 bg-gray-400 mr-5 animate-pulse rounded"></div>
			<div className="w-36 h-5 bg-gray-400  animate-pulse rounded"></div>
		</div>
	)

	const CardSkeleton = () => (
		<div className="bg-gray-100 p-4 rounded-2xl">
			<div className="flex h-5 flex-row justify-between mb-2 items-center">
				<div className="w-1/3 h-full bg-gray-300 animate-bounce rounded"></div>
				<div className="w-5 h-1/2 bg-gray-300 animate-bounce rounded"></div>
			</div>
			<div className="w-2/3 h-3 bg-gray-300 mb-5 animate-bounce rounded"></div>
			<div className="w-2/3 h-3 bg-gray-300 mb-1 animate-bounce rounded"></div>
			<div className="w-2/3 h-3 bg-gray-300 mb-3 animate-bounce rounded"></div>
			<div className="w-full h-1 bg-gray-300 mb-3 animate-bounce rounded"></div>
			<div className="w-full h-14 space-x-2 flex flex-row rounded">
				<div className="w-1/3 h-full bg-gray-200 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-400 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-400 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-400 animate-pulse rounded"></div>
					</div>
				</div>
				<div className="w-1/3 h-full bg-gray-200 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-400 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-400 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-400 animate-pulse rounded"></div>
					</div>
				</div>
				<div className="w-1/3 h-full bg-gray-200 flex flex-row justify-between px-2 py-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-400 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-400 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-400 animate-pulse rounded"></div>
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
		<div className="w-full p-5  min-h-screen bg-gray-50">
			<TopMenuSkeleton />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{Array(COUNTER).fill(<CardSkeleton />)}
			</div>
		</div>
	)
}

export default Skeleton
