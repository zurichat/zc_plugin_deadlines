import Joi from 'joi'
import {
	validateBodyRequest,
	validateParamRequest,
	validateQueryRequest,
} from './common'

const reminderSchema = async (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().trim().required().label('Title'),
		description: Joi.string().trim().required().label('Description'),
		assignee: Joi.string().trim().required().label('Assignee'),
		creator: Joi.string().trim().required().label('Creator'),
		startDate: Joi.date().required().label('Start date'),
		dueDate: Joi.date().required().label('Due date'),
		// time: Joi.string()
		// 	.trim()
		// 	.regex(/^([0-9]{2})\:([0-9]{2})$/)
		// 	.required()
		// 	.label('Time'),
	})
	return validateBodyRequest(req, next, schema)
}

const searchSchema = async (req, res, next) => {
	const schema = Joi.object({
		text: Joi.string().trim().required().label('Search term'),
	})
	return validateBodyRequest(req, next, schema)
}

const updateSchema = async (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().trim().label('Title'),
		description: Joi.string().trim().label('Description'),
		assignee: Joi.string().trim().label('Assignee'),
		creator: Joi.string().trim().label('Creator'),
		startDate: Joi.date().label('Start date'),
		dueDate: Joi.date().label('Due date'),
		// time: Joi.string()
		// 	.trim()
		// 	.regex(/^([0-9]{2})\:([0-9]{2})$/)
		// 	.required()
		// 	.label('Time'),
	})
	return validateBodyRequest(req, next, schema)
}

const idParams = async (req, res, next) => {
	const schema = Joi.object({
		id: Joi.string().trim().required().label('ID'),
	})
	validateParamRequest(req, next, schema)
}

const addRoomSchema = async (req, res, next) => {
	const schema = Joi.object({
		orgId: Joi.string().trim().required().label('Organization Id'),
		userId: Joi.string().trim().required().label('User Id'),
		title: Joi.string().trim().required().label('Title'),
	})
	validateQueryRequest(req, next, schema)
}

export { searchSchema, reminderSchema, updateSchema, addRoomSchema, idParams }
