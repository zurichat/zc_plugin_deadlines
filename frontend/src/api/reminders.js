import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import { validateCreateReminderData } from '../utils/validation'

const axiosInstance = axios.create({
	baseURL: '/api/v1',
})

export const useAllReminders = () => {
	const { isLoading, data, error, isPlaceholderData, isError } = useQuery(
		'allReminders',
		async () => {
			try {
				const res = await axiosInstance({
					method: 'GET',
					url: '/getReminders',
				})
				return { ...res, length: res.data.data.result.length }
			} catch (error) {
				if (error.response.status === 204) {
					throw new Error({
						message: 'No data found',
						statusCode: 204,
						headers: error.response.headers,
					})
				} else if (error.resonse.status === 400) {
					throw new Error({
						message: 'Bad request due to invalid syntax',
						statusCode: 400,
						headers: error.response.headers,
					})
				} else if (error.resonse.status === 403) {
					throw new Error({
						message: 'Client does not have access rights to content ',
						statusCode: 403,
						headers: error.response.headers,
					})
				} else if (error.resonse.status === 404) {
					throw new Error({
						message: 'Server cannot find requested resource',
						statusCode: 404,
						headers: error.response.headers,
					})
				} else if (error.resonse.status === 500) {
					throw new Error({
						message: 'Internal server error',
						statusCode: 500,
						headers: error.response.headers,
					})
				} else if (error.resonse.status === 503) {
					throw new Error({
						message: 'Service Unavailable',
						statusCode: 503,
						headers: error.response.headers,
					})
				} else {
					throw new Error('Fetching data failed')
				}
			}
		},
		{
			placeholderData: () => {
				return {
					data: {
						result: [],
					},
				}
			},
		}
	)

	return { isLoading, fetchedData: data, error, isPlaceholderData, isError }
}

export const useCreateReminder = (payload) => {
	const { data, error, isLoading, isSuccess } = useMutation(
		'createReminder',
		async () => {
			if (validateCreateReminderData(payload)) {
				try {
					const res = await axiosInstance({
						data: payload,
						method: 'POST',
						url: '/reminders',
					})

					return res
				} catch (error) {
					if (error.response.status === 204) {
						throw new Error({
							message: 'No data found',
							statusCode: 204,
							headers: error.response.headers,
						})
					} else if (error.resonse.status === 400) {
						throw new Error({
							message: 'Bad request due to invalid syntax',
							statusCode: 400,
							headers: error.response.headers,
						})
					} else if (error.resonse.status === 403) {
						throw new Error({
							message: 'Client does not have access rights to content ',
							statusCode: 403,
							headers: error.response.headers,
						})
					} else if (error.resonse.status === 404) {
						throw new Error({
							message: 'Server cannot find requested resource',
							statusCode: 404,
							headers: error.response.headers,
						})
					} else if (error.resonse.status === 500) {
						throw new Error({
							message: 'Internal server error',
							statusCode: 500,
							headers: error.response.headers,
						})
					} else if (error.resonse.status === 503) {
						throw new Error({
							message: 'Service Unavailable',
							statusCode: 503,
							headers: error.response.headers,
						})
					}
				}
			} else {
				throw new Error('Payload validation failed')
			}
		}
	)

	return { responseBody: data, error, isLoading, isSuccess }
}

