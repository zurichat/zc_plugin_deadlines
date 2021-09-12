import React from 'react'

const AdminView = () => {
	return (
		<div className="border-2 border-black w-6/7 flex-col">
			<div className="h-12 bg-brand-primary flex items-center">
				<h2 className="border-black border-2 h-1/3 text-xs font-craFont font-bold mx-4">
					Deadline-Title
				</h2>
				<h2 className="border-black border-2 h-1/3 text-xs font-craFont font-bold mx-1">
					Priority level
				</h2>
			</div>
			<div className="flex-col p-4">
				<h2 className="border-black border-2 text-xs font-craFont font-bold">
					Description
				</h2>
				<p className="border-black border-2 text-xs font-craFont font-bold break-words">
					This is a description of the task title. This paragraph is supposed to
					wrap its contents to fit inside whatever the size
				</p>
				<div className="flex border-black border-2">
					<div className="flex-col w-2/7">
						<h1 className="h-5 w-6/7 border-black border-2 text-xs font-bold">
							Start Date
						</h1>
						<h1 className="h-5 border-black border-2 text-xs text-cra-primary font-normal">
							31 Aug 2021
						</h1>
					</div>
					<div className="flex-col w-2/7 mx-2">
						<h1 className="h-5 w-6/7 border-black border-2 text-xs font-bold">
							Due Date
						</h1>
						<h1 className="h-5 border-black border-2 text-xs text-cra-primary font-normal">
							31 Aug 2021
						</h1>
					</div>
					<div className="flex-col w-2/7">
						<h1 className="h-5 w-6/7 border-black border-2 text-xs font-bold">
							Due In
						</h1>
						<h1 className="h-5 border-black border-2 text-xs text-cra-primary font-normal">
							31 Aug 2021
						</h1>
					</div>
				</div>
				<h2 className="border-black border-2 text-xs font-craFont font-bold">
					Assigned To
				</h2>
				<h2 className="border-black border-2 text-xs font-craFont font-bold">
					#channelName
				</h2>
				<h2 className="border-black border-2 text-xs font-craFont font-bold">
					Assigned By
				</h2>
				<div className="flex border-black border-2">
					<div className="h-6 w-6 border-black border-2 rounded"></div>
					<h2 className="h-6 mx-3 border-black border-2 text-cra-primary">
						You
					</h2>
				</div>
				<div className="flex border-black border-2">
					<div className="h-6 w-6 border-black border-2 rounded"></div>
					<h2 className="h-6 mx-3 border-black border-2 text-cra-primary">
						You
					</h2>
				</div>
				<div className="flex justify-end">
					<button className="w-16 h-7 border-black border-2 text-sm text-brand-primary font-semibold">
						Cancel
					</button>
					<button className="w-16 h-7 border-black border-2 text-sm bg-brand-primary font-semibold text-brand-bg-white">
						Update
					</button>
				</div>
			</div>
		</div>
	)
}

export default AdminView
