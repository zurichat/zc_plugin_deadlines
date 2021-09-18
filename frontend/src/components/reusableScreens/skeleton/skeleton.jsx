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
		<div className="flex flex-row bg-gray-white border-2 p-5 rounded-2xl">
			<div className="w-2/3 pr-4 border-r-2">
				<div className="w-2/3 h-5 mb-2 bg-gray-200 animate-pulse rounded"></div>
				<div className="w-full h-3 bg-gray-200 mb-5 animate-pulse rounded"></div>
				<div className="w-full h-3 bg-gray-200 mb-1 animate-pulse rounded"></div>
				<div className="w-full h-3 bg-gray-200 mb-1 animate-pulse rounded"></div>
				<div className="w-full h-3 bg-gray-200 mb-5 animate-pulse rounded"></div>
				<div className="w-2/4 h-7 bg-gray-200 mb-1 animate-pulse rounded"></div>
			</div>

			<div className="w-1/3 flex flex-col space-y-2 ">
				<div className="w-5 h-2 ml-auto bg-gray-200 animate-pulse mb-3 rounded-sm"></div>

				<div className="w-full  flex flex-row justify-between p-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-200 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-200 animate-pulse rounded"></div>
					</div>
				</div>

				<div className="w-full h-px ml-2 bg-gray-100"></div>

				<div className="w-full  flex flex-row justify-between p-2 rounded">
					<div className="w-1/3 flex flex-col items-center ">
						<div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
					</div>
					<div className="w-2/3 flex flex-col space-y-2">
						<div className="w-2/3 h-3 bg-gray-200 animate-pulse rounded"></div>
						<div className="w-full h-3 bg-gray-200 animate-pulse rounded"></div>
					</div>
				</div>
			</div>
		</div>
	)

	if (type === 'top') return <TopMenuSkeleton />
	if (type === 'card')
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{[...Array(COUNTER)].map((n, index) => (
					<CardSkeleton key={index} n={n} />
				))}
			</div>
		)

	if (type !== ('top' && 'card'))
		return (
			<div className="w-full p-5  min-h-screen">
				<TopMenuSkeleton />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{[...Array(COUNTER)].map((n, index) => (
						<CardSkeleton key={index} n={n} />
					))}
				</div>
			</div>
		)
}

export default Skeleton
