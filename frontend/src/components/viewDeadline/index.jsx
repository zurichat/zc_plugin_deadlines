import React from 'react'
import Modal from '../modal'

import ViewDescription from './components/ViewDescription'
import ViewTime from './components/ViewTime'
import ViewTitle from './components/ViewTitle'
import ViewAssigned from './components/ViewAssigned'
import ViewDueDate from './components/ViewDueDate'

const ViewDeadline = ({
	modalData: {
		viewDeadline: { title, description, date, time },
	},
}) => {
	return (
		<Modal title={'View Deadline'}>
			<div className="flex flex-col md:flex-row">
				<div className="text-left">
					<ViewTitle title={title || 'Designing Zuri Dashboard'} />
					<ViewDescription
						description={
							description ||
							'This task will be a sprint, we are to use the design to implement a responsive dashboard'
						}
					/>
				</div>
				<div id="divider" className="border-t md:border-l my-5 md:mx-5" />
				<div>
					<ViewDueDate dueDate={date || new Date()} />
					<ViewTime time={time || '3:00 PM'} />
					<ViewAssigned />
				</div>
			</div>
		</Modal>
	)
}

export default ViewDeadline
