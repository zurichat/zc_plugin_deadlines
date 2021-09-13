import React from 'react'
import ColTitleDes from '../component/columnTitleDes'
import RowTitleDes from '../component/rowTitleDes'
import Avatar from '../component/avatar'

const AdminView = ({
	description,
	startDate,
	dueDate,
	dueIn,
	assignedTo,
	assignee,
	src,
	alt,
}) => {
	return (
		<div className=" w-6/7 flex-col">
			<div className="h-12 bg-brand-primary flex items-center">
				<h2 className=" h-1/3 text-xs font-craFont font-bold mx-4">
					Deadline-Title
				</h2>
				<h2 className=" h-1/3 text-xs font-craFont font-bold mx-1">
					Priority level
				</h2>
			</div>
			<div className="flex-col p-4">
				<ColTitleDes title="Description" writeUp={description} />
				<div className="flex ">
					<div className="flex gap-6">
						<ColTitleDes title="Start Date" writeUp={startDate} />
						<ColTitleDes title="Due Date" writeUp={dueDate} />
						<ColTitleDes
							title="Due In"
							writeUp={<span className="text-brand-error">{dueIn} </span>}
						/>
					</div>
				</div>
				<ColTitleDes title="Assigned To" writeUp={assignedTo} />
				<ColTitleDes
					title="Assignee"
					writeUp={
						<RowTitleDes
							title={<Avatar src={src} alt={alt} />}
							writeUp={assignee}
						/>
					}
				/>
				<div className="flex ">
					<div className="h-6 w-6 border-black border-2 rounded"></div>
					<label className="h-6 w-12 mx-3">
						<input
							className=" absolute -ml-20"
							type="checkbox"
							onChange={(event) => {
								console.log(event.target.checked)
							}}
						/>
						<div className="flex w-9 h-4 mt-1 rounded-full bg-brand-primary relative">
							<div className="flex w-4 h-4 rounded-full bg-brand-secondary relative"></div>
						</div>
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

export default AdminView
