import Joi from 'joi'
import PriorityType from '@types/priority.type'

const reminderSchema = async (req, next, schema) => {
	const schemaObj = Joi.object({
		priority: Joi.string()
			.valid(...Object.values(PriorityType))
			.label('Priority Type'),
		expiryDate: Joi.date().required().label('Start date'),
		description: Joi.string().trim().required().label('Description'),
		shouldRemind: Joi.boolean().label('Recurring'),
	})

	return schemaObj
}

export default reminderSchema
