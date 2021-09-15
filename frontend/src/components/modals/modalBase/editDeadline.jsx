import React, { useState, useRef } from 'react'
import ColTitleDes from '../component/columnTitleDes'
import TextField from '../component/textField'
import DatePicker from '../component/datePicker'

const EditDeadline = ({ description }) => {
	const [radio, setRadio] = useState({ status: 'Low' }) //should receive initial task status from props
	const radioTogglerOne = useRef()
	const radioTogglerTwo = useRef()
	const radioTogglerThree = useRef()
	return (
		<div className=" w-6/7 flex-col md:w-3/7 md:ml-96">
			<div className="h-12 bg-brand-primary flex items-center md:rounded-t-lg">
				<h2 className=" h-1/3 text-xs font-craFont font-bold mx-4">
					Edit Deadline
				</h2>
			</div>
			<div className="flex-col border-black border-2 p-4 md:rounded-b-lg">
				<ColTitleDes title="Title" />
				<TextField placeholder="Deadline Title" />
				<ColTitleDes title="Description" />
				<TextField placeholder="Deadline Description" />
				<DatePicker />

				<div className="w-1/2 flex-col">
					<label className="h-6 w-1/2 flex">
						<input
							type="radio"
							name="oneradio"
							value="Low"
							className="mt-1 hidden"
							onChange={(event) => {
								setRadio({ state: event.target.value })
							}}
						/>
						<div className="flex justify-center self-center w-4 h-4 border-2 border-black rounded-full relative">
							<div
								id="1"
								ref={radioTogglerOne}
								className={
									radio.state === 'Low'
										? 'flex-row self-center w-2 h-2 duration-300 rounded-full bg-brand-primary relative'
										: 'flex-row self-center w-2 h-2 duration-300 rounded-full relative'
								}
							></div>
						</div>
						<h2 className="h-4 ml-2 content-center">Low</h2>
					</label>
					<label className="h-6 w-1/2 flex">
						<input
							type="radio"
							name="oneradio"
							value="Medium"
							className="mt-1 hidden"
							onChange={(event) => {
								setRadio({ state: event.target.value })
							}}
						/>
						<div className="flex justify-center self-center w-4 h-4 border-2 border-black rounded-full relative">
							<div
								id="2"
								ref={radioTogglerTwo}
								className={
									radio.state === 'Medium'
										? 'flex-row self-center w-2 h-2 duration-300 rounded-full bg-brand-primary relative'
										: 'flex-row self-center w-3 duration-300 h-3 rounded-full relative'
								}
							></div>
						</div>
						<h2 className="h-4 ml-2 content-center">Medium</h2>
					</label>
					<label className="h-6 w-1/2 flex">
						<input
							type="radio"
							name="oneradio"
							value="High"
							className="mt-1 hidden"
							onChange={(event) => {
								setRadio({ state: event.target.value })
							}}
						/>
						<div className="flex justify-center self-center w-4 h-4 border-2 border-black rounded-full relative">
							<div
								id="2"
								ref={radioTogglerThree}
								className={
									radio.state === 'High'
										? 'flex-row self-center w-2 h-2 duration-300 rounded-full bg-brand-primary relative'
										: 'flex-row self-center w-3 duration-300 h-3 rounded-full relative'
								}
							></div>
						</div>
						<h2 className="h-4 ml-2 content-center">High</h2>
					</label>
				</div>
				<div className="flex justify-end">
					<button className="w-16 h-7  text-sm text-brand-primary font-semibold">
						Cancel
					</button>
					<button className="w-16 h-7  text-sm bg-brand-primary font-semibold text-brand-bg-white">
						Update
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditDeadline
