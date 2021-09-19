import React from 'react'

const Skeleton = ({ type, counter }) => {
	const COUNTER = counter || 5

	const TopMenuSkeleton = () => (
		<div className="dtw-w-full sm:dtw-w-2/3 md:dtw-w-1/3 dtw-flex  dtw-justify-between dtw-mt-5 dtw-mb-14 dtw-bg-gray-white dtw-p-2 dtw-rounded">
			<div className="dtw-w-36 dtw-h-5 dtw-bg-gray-200 dtw-mr-5 dtw-animate-pulse dtw-rounded"></div>
			<div className="dtw-w-36 dtw-h-5 dtw-bg-gray-200 dtw-mr-5 dtw-animate-pulse dtw-rounded"></div>
			<div className="dtw-w-36 dtw-h-5 dtw-bg-gray-200  dtw-animate-pulse dtw-rounded"></div>
		</div>
	)

	const CardSkeleton = () => (
		<div className="dtw-flex dtw-flex-row dtw-bg-gray-white dtw-border-2 dtw-p-5 dtw-rounded-2xl">
			<div className="dtw-w-2/3 dtw-pr-4 dtw-border-r-2">
				<div className="dtw-w-2/3 dtw-h-5 dtw-mb-2 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded"></div>
				<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-mb-5 dtw-animate-pulse dtw-rounded"></div>
				<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-mb-1 dtw-animate-pulse dtw-rounded"></div>
				<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-mb-1 dtw-animate-pulse dtw-rounded"></div>
				<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-mb-5 dtw-animate-pulse dtw-rounded"></div>
				<div className="dtw-w-2/4 dtw-h-7 dtw-bg-gray-200 dtw-mb-1 dtw-animate-pulse dtw-rounded"></div>
			</div>

			<div className="dtw-w-1/3 dtw-flex dtw-flex-col dtw-space-y-2 ">
				<div className="dtw-w-5 dtw-h-2 dtw-ml-auto dtw-bg-gray-200 dtw-animate-pulse dtw-mb-3 dtw-rounded-sm"></div>

				<div className="dtw-w-full  dtw-flex dtw-flex-row dtw-justify-between dtw-p-2 dtw-rounded">
					<div className="dtw-w-1/3 dtw-flex dtw-flex-col dtw-items-center ">
						<div className="dtw-w-5 dtw-h-5 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded-full"></div>
					</div>
					<div className="dtw-w-2/3 dtw-flex dtw-flex-col dtw-space-y-2">
						<div className="dtw-w-2/3 dtw-h-3 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded"></div>
						<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded"></div>
					</div>
				</div>

				<div className="dtw-w-full dtw-h-px dtw-ml-2 dtw-bg-gray-100"></div>

				<div className="dtw-w-full  dtw-flex dtw-flex-row dtw-justify-between dtw-p-2 dtw-rounded">
					<div className="dtw-w-1/3 dtw-flex dtw-flex-col dtw-items-center ">
						<div className="dtw-w-5 dtw-h-5 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded-full"></div>
					</div>
					<div className="dtw-w-2/3 dtw-flex dtw-flex-col dtw-space-y-2">
						<div className="dtw-w-2/3 dtw-h-3 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded"></div>
						<div className="dtw-w-full dtw-h-3 dtw-bg-gray-200 dtw-animate-pulse dtw-rounded"></div>
					</div>
				</div>
			</div>
		</div>
	)

	if (type === 'top') return <TopMenuSkeleton />
	if (type === 'card')
		return (
			<div className="dtw-grid dtw-grid-cols-1 sm:dtw-grid-cols-2 lg:dtw-grid-cols-3 dtw-gap-4">
				{[...Array(COUNTER)].map((n, index) => (
					<CardSkeleton key={index} n={n} />
				))}
			</div>
		)

	if (type !== ('top' && 'card'))
		return (
			<div className="dtw-w-full dtw-p-5  dtw-min-h-screen">
				<TopMenuSkeleton />
				<div className="dtw-grid dtw-grid-cols-1 sm:dtw-grid-cols-2 lg:dtw-grid-cols-3 dtw-gap-4">
					{[...Array(COUNTER)].map((n, index) => (
						<CardSkeleton key={index} n={n} />
					))}
				</div>
			</div>
		)
}

export default Skeleton
