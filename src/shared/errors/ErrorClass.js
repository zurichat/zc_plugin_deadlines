/* eslint-disable max-classes-per-file */
// your code goes here
export class InvalidPropertyError extends Error {
	constructor(msg, statusCode = 400) {
		super(msg)

		this.name = 'InvalidPropertyError'
		this.statusCode = statusCode
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, InvalidPropertyError)
		}
	}
}

export class UniqueConstraintError extends Error {
	/**
	 *
	 * @param {*} statusCode
	 * @param {*} msg
	 * @param {*} isOperational
	 * @param {*} stack
	 */
	constructor(message, statusCode = 409, isOperational = true, stack = '') {
		super(message)
		this.name = 'UniqueConstraintError'
		this.statusCode = statusCode
		this.isOperational = isOperational
		if (stack) {
			this.stack = stack
		} else {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export class RequiredPropertyError extends Error {
	constructor(msg, statusCode = 400) {
		super(msg)

		this.name = 'RequiredPropertyError'
		this.statusCode = statusCode
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, RequiredPropertyError)
		}
	}
}

export const errorHandler = (err, req, res, next) => {
	console.log(err)
	if (process.env.NODE_ENV === 'development') {
		if (!err.statusCode) err.statusCode = 500
		return res.status(err.statusCode).json({
			status: false,
			title: err.name,
			errorMessage: err.message,
			stack: err.stack,
		})
	}

	if (!err.statusCode) err.statusCode = 500
	return res.status(err.statusCode).json({
		status: false,
		message: err.message,
	})
}
