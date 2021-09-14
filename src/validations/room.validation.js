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
		members: Joi.array().required().label('Members'),
		ownerId: Joi.string().required().label('Owner ID'),
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
		ownerId: Joi.string().trim().label('Owner ID'),
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

const addRoomSchema = async (req, res, next) => {
	const schema = Joi.object({
		orgId: Joi.string().trim().required().label('Organization Id'),
		userId: Joi.string().trim().required().label('User Id'),
		title: Joi.string().trim().required().label('Title'),
	})
	validateQueryRequest(req, next, schema)
}

export { searchSchema, createSchema, updateSchema, addRoomSchema, idParams }
