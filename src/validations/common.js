import { InvalidPropertyError } from '@shared/errors/ErrorClass'
import Joi from 'joi'

export function validateBodyRequest(req, next, schema) {
	const options = {
		abortEarly: false,
		allowUnknown: true,
		stripUnknown: true,
	}
	const { error, value } = schema.validate(req.body, options)
	if (error?.message) {
		const err = new InvalidPropertyError(error.message)
		next(err)
	}

	if (error) {
		//   throw new RequiredParameterError(
		//     `${error.details.map((x) => x.message).join(", ")}`
		//   );
	}
	req.body = value
	next()
}

export function validateQueryRequest(req, next, schema) {
	const options = {
		abortEarly: false,
		allowUnknown: true,
		stripUnknown: true,
	}

	const { error, value } = schema.validate(req.body, options)
	if (error?.message) {
		const err = new InvalidPropertyError(error.message)
		next(err)
	}

	if (error) {
		//   throw new RequiredParameterError(
		//     `${error.details.map((x) => x.message).join(", ")}`
		//   );
	}
	req.query = value
	next()
}

export function validateParamRequest(req, next, schema) {
	const options = {
		abortEarly: false,
		allowUnknown: true,
		stripUnknown: true,
	}

	const { error, value } = schema.validate(req.body, options)
	if (error?.message) {
		const err = new InvalidPropertyError(error.message)
		next(err)
	}

	if (error) {
		//   throw new RequiredParameterError(
		//     `${error.details.map((x) => x.message).join(", ")}`
		//   );
	}
	req.params = value
	next()
}
