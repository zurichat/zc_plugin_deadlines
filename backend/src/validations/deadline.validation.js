import Joi from 'joi'
import {
	validateBodyRequest,
	validateParamRequest,
	validateQueryRequest,
} from './common'

const createSchema = async (req, res, next) => {
	const schema = Joi.object({
		title: Joi.string().trim().required().label('Title'),
		description: Joi.string().trim().required().label('Description'),
		assignee: Joi.object({
			channelName: Joi.string().trim().required().label('assignee.channelName'),
			channelId: Joi.string().trim().required().label('assignee.channelId'),
			channelLink: Joi.string()
				.trim()
				.uri()
				.required()
				.label('assignee.channelLink'),
		})
			.required()
			.label('Assignee'),
		creator: Joi.object({
			userName: Joi.string().trim().required().label('creator.userName'),
			userId: Joi.string().trim().required().label('creator.userId'),
			userLink: Joi.string().trim().uri().required().label('creator.userLink'),
		})
			.required()
			.label('Creator'),
		startDate: Joi.date().required().label('Start date'),
		dueDate: Joi.date().required().label('Due date'),
		priority: Joi.string()
			.trim()
			.required()
			.valid('low', 'medium', 'high')
			.label('Priority'),
		shouldRemind: Joi.boolean().required().label('shouldRemind'),
		reminders: Joi.array().required().label('Reminders'),
		status: Joi.string().trim().valid('completed', 'pending').label('Status'),
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
		assignee: Joi.object({
			channelName: Joi.string().trim().label('assignee.channelName'),
			channelId: Joi.string().trim().label('assignee.channelId'),
			channelLink: Joi.string().trim().uri().label('assignee.channelLink'),
		}).label('Assignee'),
		creator: Joi.object({
			userName: Joi.string().trim().label('creator.userName'),
			userId: Joi.string().trim().label('creator.userId'),
			userLink: Joi.string().trim().uri().label('creator.userLink'),
		}).label('Creator'),
		startDate: Joi.date().label('Start date'),
		dueDate: Joi.date().label('Due date'),
		priority: Joi.string()
			.trim()
			.valid('low', 'medium', 'high')
			.label('Priority'),
		shouldRemind: Joi.boolean().label('shouldRemind'),
		reminders: Joi.array().label('Reminders'),
		status: Joi.string().trim().valid('completed', 'pending').label('Status'),
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

export { searchSchema, createSchema, updateSchema, addRoomSchema, idParams }
