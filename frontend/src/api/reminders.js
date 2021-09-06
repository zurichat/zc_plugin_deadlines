import axios from 'axios'
import { useQuery } from 'react-query'
// import { validateCreateReminderData } from '../utils/validation'

const axiosInstance = axios.create({
	baseURL: '/api/v1',
})

export const useAllReminders = () => {
	const { isLoading, data, error } = useQuery('allReminders', async () => {
		try {
			await axiosInstance({
				method: 'GET',
				url: '/getReminders',
			})
		} catch (error) {
			console.error(error)
			throw error
		}
	})

	if (isLoading) return 'loading'

	if (!error) {
		return data
	} else {
		return error
	}
}

// export const useCreateReminder = (payload) => {
// 	const isDataValid = validateCreateReminderData(payload)
// 	if (!isDataValid) {
// 		throw new Error('Invalid Payload')
// 	} else {
// 		new Promise((resolve, reject) => {
// 			try {
// 				const axiosQuery = async () => {
// 					const res = await axiosInstance(
// 						{
// 							method: 'POST',
// 							url: '/reminders',
// 						},
// 						{ data: payload }
// 					)
// 					return res
// 				}
// 				const { data, error } = useMutation('createReminder', axiosQuery)

// 				if (error) {
// 					reject(error)
// 				} else {
// 					resolve(data)
// 				}
// 			} catch (error) {
// 				reject(error)
// 			}
// 		})
// 	}
// }

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
