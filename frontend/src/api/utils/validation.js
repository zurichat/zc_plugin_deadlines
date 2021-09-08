const validateCreateReminderData = (payload) => {
	if (!payload) throw new Error('Invalid Payload')

	const { title, description, assignees, creator, startDate, dueDate, time } =
		payload

	try {
		if (!title || typeof title !== 'string')
			throw new Error('Title Validation Failed')
		if (!description || typeof description !== 'string')
			throw new Error('Description Validation Failed')
		if (!assignees || !Array.isArray(assignees) || assignees.length < 1)
			throw new Error('Assignees Validation Failed')
		if (!creator || typeof creator !== 'string')
			throw new Error('Creator Validation Failed')
		if (!startDate || !(startDate instanceof Date))
			throw new Error('Start Date Validation Failed')
		if (!dueDate || !(dueDate instanceof Date))
			throw new Error('Due Date Validation Failed')
		if (!time || !(time instanceof Date))
			throw new Error('Time Validation Failed')

		return true
	} catch (error) {
		return false
	}
}

export default validateCreateReminderData
