import React from 'react'
import CalenderIcon from '../../assets/img/svg/calender.svg'
import Remaining from '../../assets/img/svg/remaining.svg'
import { XIcon } from '@heroicons/react/solid'
import UserIcon from '../../assets/img/png/users.png'

const ModalForm = () => {
	return (
		<div className="grid grid-flow-rows grid-cols-5 gap-y-6 pb-4  w-10/12 sm:w-9/12 m-auto mt-8 bg-white shadow-md rounded-lg">
			<div className="col-span-5 text-center md:text-left rounded-t-lg">
				<div className="h-16 flex flex-row justify-between  px-6 pt-4 bg-brand-primary rounded-t-lg text-white">
					<h1 className="text-base text-brand-bg-white sm:text-xl">
						Create a New Deadline
					</h1>
					<button className="bg-white w-6 h-6 sm:w-8 sm:h-8 rounded-full text-brand-primary text-center text-xs sm:text-base font-semibold">
						<XIcon className="p-1" />
					</button>
				</div>
			</div>

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
						<label className="block  text-base font-semibold">Assign To</label>
						<select className="block w-full border-b border-brand-text-time text-sm outline-none focus:border-brand-primary mt-2">
							<option></option>
							<option>Assignee 1</option>
							<option>Assignee 2</option>
							<option>Assignee 3</option>
							<option>Assignee 4</option>
						</select>
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
