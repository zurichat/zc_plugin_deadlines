import React from 'react'
import DueDatePicker from '../../newDeadline/dueDate'

const ViewDueDate = ({ dueDate }) => {
	return (
		<div className="mb-5">
			<DueDatePicker dateValue={dueDate} inputDisabled={true} />
		</div>
	)
}

export default ViewDueDate
