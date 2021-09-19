import React from 'react'

const ModalForm = ({ closeModal }) => {
	return (
		<div className="text-left sm:rounded-bl-lg">
			<div className="w-full mb-4">
				<label className="block text-lg font-semibold">Title</label>
				<input
					type="text"
					placeholder="E.g. UI Design Submission"
					className="text-xs border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-3 "
				/>
			</div>

			<div className="w-full my-4">
				<label htmlFor="description" className="block text-lg font-semibold">
					Description
				</label>
				<textarea
					className="text-xs border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-10 py-3"
					name="description"
					id="description"
					placeholder="Describe the deadline"
				/>
			</div>

			<div className="flex my-4">
				<div className="w-1/2">
					<label className="block text-lg font-semibold">Start Date</label>
					<input
						type="date"
						placeholder=""
						className=" border-b border-brand-text-time w-full h-3 pr-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
					></input>
				</div>
				<div className="w-1/2">
					<label className="block text-lg font-semibold">Due Date</label>
					<input
						type="date"
						placeholder=""
						className=" border-b border-brand-text-time w-full h-3 pr-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-brand-primary rounded-md"
					></input>
				</div>
			</div>

			<div className="w-full my-4">
				<label className="block text-lg font-semibold">Assign To</label>
				<input
					type="text"
					placeholder="E.g. Channel Name"
					className="text-xs border-b border-brand-text-time outline-none focus:border-brand-primary w-full h-5 py-3 "
				/>
			</div>

			<div className="w-full mt-2">
				<p className="block text-lg font-semibold">Select priority</p>
				<div>
					<input
						type="radio"
						htmlId="low-priority"
						htmlName="priority"
						htmlValue="low"
						checked
					/>
					<label className="pl-2" htmlFor="low-priority">
						Low
					</label>
				</div>

				<div>
					<input
						type="radio"
						htmlId="medium-priority"
						htmlName="priority"
						htmlValue="medium"
					/>
					<label className="pl-2" htmlFor="medium-priority">
						Medium
					</label>
				</div>

				<div>
					<input
						type="radio"
						htmlId="high-priority"
						htmlName="priority"
						htmlValue="high"
					/>
					<label className="pl-2" htmlFor="high-priority">
						High
					</label>
				</div>
			</div>

			<div className="flex justify-end items-baseline my-8 text-base">
				<button
					className="text-brand-primary mx-1 p-2 sm:py-2 sm:px-6 rounded"
					onClick={closeModal}
				>
					Cancel
				</button>
				<button
					className="bg-brand-primary text-brand-bg-white mx-1 p-2 sm:py-2 sm:px-6 rounded"
					onClick={closeModal}
				>
					Create
				</button>
			</div>
		</div>
	)
}

export default ModalForm
