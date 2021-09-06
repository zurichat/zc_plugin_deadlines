import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import { validateCreateReminderData } from '../utils/validation'

// Errors to handle
// {500, 503}, 404, 204, 400, 403,

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
				throw error
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
					}
					throw error
				}
			} else {
				throw new Error('Payload validation failed')
			}
		}
	)

	return { responseBody: data, error, isLoading, isSuccess }
}

// export const useDeleteReminder = (id) => {
// 	new Promise((resolve, reject) => {
// 		try {
// 			if (!id) throw new Error('Invalid id')

// 			const axiosQuery = async () => {
// 				const res = await axiosInstance({
// 					url: `/reminders/${id}`,
// 					method: 'DELETE',
// 				})
// 				return res
// 			}
// 			const { data, error } = useMutation('deleteReminder', axiosQuery)
// 			if (error) {
// 				reject(error)
// 			} else {
// 				resolve(data)
// 			}
// 		} catch (error) {
// 			reject(error)
// 		}
// 	})
// }

// export const useUpcomingReminders = new Promise((resolve, reject) => {
// 	try {
// 		const axiosQuery = async () => {
// 			const res = await axiosInstance({
// 				method: 'GET',
// 				url: '/upcoming',
// 			})
// 			return res
// 		}
// 		const { data } = useQuery('upcomingReminders', axiosQuery)

// 		resolve(data)
// 	} catch (error) {
// 		reject(error)
// 	}
// })
