const errorHandler = (error) => {
	switch (error) {
		case error.response.status === 204:
			return new Error({
				message: 'No data found',
				statusCode: 204,
				headers: error.response.headers,
			})
		case error.response.status === 400:
			return new Error({
				message: 'Bad request due to invalid syntax',
				statusCode: 400,
				headers: error.response.headers,
			})
		case error.response.status === 403:
			return new Error({
				message: 'Client does not have access rights to content',
				statusCode: 403,
				headers: error.response.headers,
			})
		case error.response.status === 404:
			return new Error({
				message: 'Server cannot find requested resource',
				statusCode: 404,
				headers: error.response.headers,
			})
		case error.response.status === 500:
			return new Error({
				message: 'Internal server error',
				statusCode: 500,
				headers: error.response.headers,
			})
		case error.response.status === 503:
			return new Error({
				message: 'Service Unavailable',
				statusCode: 503,
				headers: error.response.headers,
			})
		default:
			return new Error('Fetching data failed')
	}
}

export default errorHandler
