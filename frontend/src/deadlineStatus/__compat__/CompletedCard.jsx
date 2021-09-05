import React from 'react'

import UserIcon from '../../assets/img/png/users.png'
import DateIcon from '../../assets/img/png/date.png'
import TimeIcon from '../../assets/img/png/time.png'

const CompletedCard = () => {
	return (
		<div>
			<div id="body">
				<div className="flex gap-8 my-6">
					<div>
						<h2 className="font-bold text-xl text-left text-brand-primary">
							Designing Zuri&#39;s Dashboard
						</h2>
						<p className="text-sm">
							This task will be a sprint, we are to use the design...
						</p>
					</div>
					<div className="flex">
						<img src={UserIcon} alt="users" className="w-16 h-10" />
						<img src={UserIcon} alt="users" className="w-16 h-10 -ml-8" />
					</div>
				</div>
				<hr className="border-gray-200 border-1" />
				<div className="flex gap-8 justify-center my-6">
					<div className="flex gap-4 pr-4 border-r-2">
						<img src={DateIcon} alt="date" className="w-4 h-4" />
						<p className="text-sm text-left -mt-2">
							Start Date:
							<br></br>
							<b>31st Aug, 2021</b>
						</p>
					</div>
					<div className="flex gap-4 pr-4 border-r-2">
						<img src={DateIcon} alt="date" className="w-4 h-4" />
						<p className="text-sm text-left -mt-2">
							Due Date:
							<br></br>
							<b className="">31st Aug, 2021</b>
						</p>
					</div>
					<div className="flex gap-4">
						<img src={TimeIcon} alt="date" className="w-4 h-4" />
						<p className="text-sm text-left -mt-2">
							Time:
							<br></br>
							<b className="">5:00pm</b>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CompletedCard
