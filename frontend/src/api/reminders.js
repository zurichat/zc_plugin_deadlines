import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import errorHandler from './utils/errorHandler'
import validateCreateReminderData from './utils/validation'
import validateUpdateReminderData from './utils/updateValidation'

const axiosInstance = axios.create({
	baseURL: '/api/v1',
})

export const useAllReminders = () => {
	const { isLoading, data, error, isPlaceholderData, isError, status } =
		useQuery(
			'allReminders',
			async () => {
				try {
					const res = await axiosInstance({
						method: 'GET',
						url: '/reminders?type=deadlines',
					})
					return { ...res, length: res.data.data.length }
				} catch (error) {
					throw errorHandler(error)
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

	// fetchedData is the response returned from the get query, error only exists if there's an error
	// isLoading and isPlaceholderData are Booleans representing loading and palceholder data states respectively
	// isPlaceholder exists primarily to deal with react calling methods on undefined when mounting components

	return {
		fetchedData: data,
		isLoading,
		error,
		isPlaceholderData,
		isError,
		status,
	}
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
					throw errorHandler(error)
				}
			}
		}
	)

	// Data is the response returned from the post, error only exists if there's an error
	// isLoading and isSuccess are Booleans representing loading and success states respectively
	// You can use isLoading to show loading spinners and isSuccess to tell when the request completed successfully and inform the user
	return { responseBody: data, error, isLoading, isSuccess }
}

//updateReminders
export const useUpdateReminders = () => {
	const { data, error, isLoading, isError, isSuccess, status, mutate } =
		useMutation('updateReminders', async (id, payload) => {
			if (validateUpdateReminderData(payload))
				try {
					const res = await axiosInstance({
						data: payload,
						method: 'PUT',
						url: `/reminders/${id}`,
					})
					return { ...res }
				} catch (error) {
					throw errorHandler(error)
				}
		})

	return {
		responseBody: data,
		error,
		isSuccess,
		isLoading,
		isError,
		status,
		updateReminder: mutate,
	}
}

// Data is the response returned from the put, error only exists if there's an error
// isLoading and isSuccess are Booleans representing loading and success states respectively
// You can use isLoading to show loading spinners and isSuccess to tell when the request completed successfully and inform the user
