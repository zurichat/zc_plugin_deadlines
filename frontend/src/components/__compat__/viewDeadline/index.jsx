import React from 'react'
import Modal from '../../modals'

import ViewDescription from './components/ViewDescription'
import ViewTime from './components/ViewTime'
import ViewTitle from './components/ViewTitle'
import ViewAssigned from './components/ViewAssigned'
import ViewDueDate from './components/ViewDueDate'
import { useAllReminders, useDeleteReminder } from '../../api/reminders'

const ViewDeadline = ({
	modalData: {
		viewDeadline: { title, description, date, time },
	},
}) => {
	const { deleteReminder } = useDeleteReminder()
	const { refetch } = useAllReminders()

	const id = '' // the id of the reminder

	const onError = () => {
		alert('Failed to delete reminder')
		refetch()
	}

	const onSuccess = () => {
		alert('Delete successful')
	}

	const handleReminderDelete = () => {
		deleteReminder(id, {
			onError,
			onSuccess,
		})
	}

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
					<button
						onClick={handleReminderDelete}
						className="bg-red-600 text-white mt-5 px-6 py-2 rounded-md focus-within:ring ring-red-300 transition-all duration-300"
					>
						Delete
					</button>
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
