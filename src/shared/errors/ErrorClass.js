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
	constructor(msg, statusCode = 409, isOperational = true, stack = '') {
		super(msg)
		this.statusCode = statusCode
		this.isOperational = isOperational
		if (stack) {
			this.stack = stack
		} else {
			Error.captureStackTrace(this, this.constructor)
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
