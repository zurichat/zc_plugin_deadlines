import React from 'react'
import CalenderIcon from '../../assets/img/svg/calender.svg'
import Remaining from '../../assets/img/svg/remaining.svg'
import UserIcon from '../../assets/img/png/users.png'
import Dropdown from './Dropdown'

const ModalForm = () => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-5 sm:col-span-3 border-r border-brand-text-time text-left sm:rounded-bl-lg">
				<div className="px-6">
					<div className="w-full mt-2">
						<label className="block text-lg font-semibold">Title</label>
						<input
							type="text"
							placeholder=""
							className="text-xs border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-3 "
						/>
					</div>

					<div className="w-full mt-4">
						<label
							htmlFor="description"
							className="block text-base font-semibold mb-1"
						>
							Description
						</label>
						<textarea
							className="bg-gray-50 rounded-lg w-full h-40 outline-none focus:ring-1 focus:ring-brand-primary"
							name="description"
							id="description"
						/>
					</div>

					<div className="w-full mt-3 mb-6">
						<Dropdown />
					</div>

					<div className="hidden sm:flex items-baseline mt-8 mb-6 text-base">
						<button className=" bg-brand-primary text-brand-bg-white p-2 sm:py-2 sm:px-6 rounded">
							Set Deadline
						</button>
					</div>
				</div>
			</div>

			<div className="col-span-5 sm:col-start-4 sm:col-end-6 rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg">
				<div className="w-full flex flex-col mt-1 text-left px-6">
					<div className="w-full sm:mt-2 ">
						<label className="flex items-center text-sm sm:mb-2.5 font-semibold">
							<span className="h-7 p-1.5 bg-brand-avatar-blue bg-opacity-25 rounded-full flex justify-center mr-1">
								<img src={CalenderIcon} alt="calender-icon" />
							</span>
							<h3>Start Date</h3>
						</label>
						<input
							type="date"
							placeholder=""
							className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
						></input>
					</div>

					<div className="w-full mt-4">
						<label className="flex items-center text-sm sm:my-2.5 font-semibold">
							<span className="h-7 p-1.5 bg-brand-avatar-blue bg-opacity-50 rounded-full flex justify-center mr-1">
								<img src={CalenderIcon} alt="calender-icon" />
							</span>
							<h3>Due Date</h3>
						</label>
						<input
							type="date"
							placeholder=""
							className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
						></input>
					</div>

					<div className="w-full mt-4">
						<label className="flex items-center text-sm sm:my-2.5 font-semibold">
							<span className="h-7 p-1 bg-brand-avatar-green bg-opacity-25 rounded-full flex justify-center mr-1">
								<img src={Remaining} alt="time-icon" />
							</span>
							<h3>Time</h3>
						</label>
						<input
							type="time"
							placeholder=""
							className="hidden sm:block border bg-gray-50 text-brand-text-header w-full h-3 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
						></input>
					</div>

					<div className="hidden sm:block mt-6">
						<h3 className="block text-base font-semibold"> Assigned</h3>
						<div className="flex mt-2">
							<img src={UserIcon} alt="users" className="w-16 h-10" />
							<img src={UserIcon} alt="users" className="w-16 h-10 -ml-7" />
						</div>
					</div>

					<div className="flex sm:hidden items-baseline my-8 text-base">
						<button className=" bg-brand-primary text-brand-bg-white p-2 sm:py-2 sm:px-6 rounded">
							Set Deadline
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalForm
