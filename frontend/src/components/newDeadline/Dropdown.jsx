import React from 'react'

const assignees = [
	{
		id: 1,
		assignee_name: 'Godswill',
	},
	{
		id: 2,
		assignee_name: 'Jumoke',
	},
	{
		id: 3,
		assignee_name: 'Olabosun',
	},
	{
		id: 4,
		assignee_name: 'Mike',
	},
	{
		id: 5,
		assignee_name: 'Andrew',
	},
]

const Dropdown = ({ ...props }) => {
	return (
		<div>
			<select
				{...props}
				className="border-b-2 border-solid border-gray-200 h-16 outline-none py-0 px-2"
			>
				<option value="null">Select an assignee</option>
				{assignees.map((assignee) => (
					<option key={assignee.id} value={assignee.assignee_name}>
						{assignee.assignee_name}
					</option>
				))}
			</select>
		</div>
	)
}

export default Dropdown
