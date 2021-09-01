/**
 *
 */
class UniqueConstraintError extends Error {
	/**
	 *
	 * @param {*} statusCode
	 * @param {*} message
	 * @param {*} isOperational
	 * @param {*} stack
	 */
	constructor(statusCode = 409, message, isOperational = true, stack = '') {
		super(message)
		this.statusCode = statusCode
		this.isOperational = isOperational
		if (stack) {
			this.stack = stack
		} else {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export default UniqueConstraintError
