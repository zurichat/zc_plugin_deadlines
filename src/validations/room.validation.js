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
		iconUrl: Joi.string().trim().required().uri().label('Icon Url'),
		members: Joi.array().label('Members'),
		isArchived: Joi.boolean().label('isArchived'),
		isPrivate: Joi.boolean().label('isPrivate'),
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
		iconUrl: Joi.string().trim().uri().label('Icon Url'),
		members: Joi.array().trim().label('Members'),
		isArchived: Joi.boolean().label('isArchived'),
		isPrivate: Joi.boolean().label('isPrivate'),
	})
	return validateBodyRequest(req, next, schema)
}

const idParams = async (req, res, next) => {
	const schema = Joi.object({
		id: Joi.string().trim().required().label('ID'),
	})
	validateParamRequest(req, next, schema)
}

const addToRoomSchema = async (req, res, next) => {
	const schema = Joi.object({
		user: Joi.object({
			userName: Joi.string().trim().required().label('user.userName'),
			userId: Joi.string().trim().required().label('user.userId'),
			userLink: Joi.string().trim().uri().required().label('user.userLink'),
		})
			.required()
			.label('User'),
	})
	validateBodyRequest(req, next, schema)
}

const sidebarQueries = async (req, res, next) => {
	const schema = Joi.object({
		orgId: Joi.string().trim().required().label('Organization Id'),
		userId: Joi.string().trim().required().label('User Id'),
	})
	return validateQueryRequest(req, next, schema)
}

export {
	searchSchema,
	createSchema,
	updateSchema,
	addToRoomSchema,
	idParams,
	sidebarQueries,
}
