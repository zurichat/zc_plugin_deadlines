import React from 'react'
import Modal from '../modal'

import ViewDescription from './components/ViewDescription'
import ViewTime from './components/ViewTime'
import ViewTitle from './components/ViewTitle'
import ViewAssigned from './components/ViewAssigned'
import ViewDueDate from './components/ViewDueDate'

const ViewDeadline = () => {
	return (
		<Modal open={true} title={'View Deadline'}>
			<div className="flex flex-row">
				<div className="text-left">
					<ViewTitle title={'Designing Zuri Dashboard'} />
					<ViewDescription
						description={
							'This task will be a sprint, we are to use the design to implement a responsive dashboard'
						}
					/>
				</div>
				<div id="divider" className="border-l mx-5" />
				<div>
					<ViewDueDate dueDate={new Date()} />
					<ViewTime time={'3:00 PM'} />
					<ViewAssigned />
				</div>
			</div>
		</Modal>
	)
}

export default ViewDeadline
