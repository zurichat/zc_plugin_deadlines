import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import errorHandler from './utils/errorHandler'
import { toast } from 'react-toastify'

const axiosInstance = axios.create({
	baseURL: 'https://reminders.zuri.chat/api/v1',
})

export const useAllReminders = () => {
	const {
		isLoading,
		isSearchActive,
		foundReminders,
		data,
		error,
		isPlaceholderData,
		isError,
		status,
	} = useQuery(
		'allReminders',
		async () => {
			try {
				const res = await axiosInstance({
					method: 'GET',
					url: '/deadlines',
				})
				return res.data.data
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

	const currentReminders = isSearchActive ? foundReminders : data

	// fetchedData is the response returned from the get query, error only exists if there's an error
	// isLoading and isPlaceholderData are Booleans representing loading and palceholder data states respectively
	// isPlaceholder exists primarily to deal with react calling methods on undefined when mounting components

	return {
		fetchedData: currentReminders,
		isLoading,
		error,
		isPlaceholderData,
		isError,
		status,
	}
}

//createReminders
export const useCreateReminders = () => {
	return useMutation(
		(payload, object_id) =>
			axiosInstance({
				data: payload,
				method: 'POST',
				url: `/deadlines/${object_id}`,
			}),
		{
			onSuccess: () => {
				queryClient
					.invalidateQueries('allReminders')
					.then(() => toast.success(`Created successfully`))
			},
			onError: () => {
				toast.error('Failed to create reminder')
			},
		}
	)
}

export const useDeleteDeadline = () => {
	const queryClient = useQueryClient()

	return useMutation(
		(object_id) => axiosInstance.delete(`/deadlines/${object_id}`),
		{
			onSuccess: () => {
				queryClient
					.invalidateQueries('allReminders')
					.then(() => toast.success(`Deleted successfully`))
			},
			onError: () => {
				toast.error('Failed to delete reminder')
			},
		}
	)
}

//updateReminders
export const useUpdateReminders = () => {
	const queryClient = useQueryClient()

	return useMutation(
		({ payload, object_id }) =>
			axiosInstance({
				data: payload,
				method: 'PUT',
				url: `/deadlines/${object_id}`,
			}),
		{
			onSettled: (_, { noToast }) => {
				queryClient.invalidateQueries('allReminders').then(() => {
					if (!noToast) toast.success(`Updated successfully`)
				})
			},

			// Until CORS issue is fixed

			// onSuccess: (_, { noToast }) => {
			// 	queryClient.invalidateQueries('allReminders').then(() => {
			// 		if (!noToast) toast.success(`Updated successfully`)
			// 	})
			// },
			// onError: (error, { noToast }) => {
			// 	console.log(error, !!error.includes(/Network Error/i))
			// 	if (!noToast) toast.error('Failed to update reminder')
			// },
		}
	)
}

export const useCreateDeadline = () => {
	const queryClient = useQueryClient()

	return useMutation(
		(payload) =>
			axiosInstance.post(`/deadlines/`, payload, {
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			}),
		{
			onSuccess: () => {
				queryClient
					.invalidateQueries('allReminders')
					.then(() => toast.success(`Deadline added successfully`))
			},
			onError: () => {
				toast.error('Failed to add deadline')
			},
		}
	)
}
