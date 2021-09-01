import Joi from 'joi'
import PriorityType from '@types/priority.type'
import { validateBodyRequest } from './common'

const reminderSchema = async (req, res, next) => {
	const schema = Joi.object({
		priority: Joi.string()
			.valid(...Object.values(PriorityType))
			.label('Priority Type'),
		expiryDate: Joi.date().required().label('Start date'),
		description: Joi.string().trim().required().label('Description'),
		shouldRemind: Joi.boolean().label('Recurring'),
	})
	return validateBodyRequest(req, next, schema)
}

export default reminderSchema
