import { UniqueConstraintError } from '@shared/errors/ErrorClass'

const conflictErrorController = async (req, res, next) => {
	const err = new UniqueConstraintError(
		'Update failed. Request conflicts with current resource'
	)

	return res.status(err.statusCode).json({
		success: false,
		message: err.message,
	})
}

export default conflictErrorController
