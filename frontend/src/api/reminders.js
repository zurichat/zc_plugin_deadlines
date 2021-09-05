import axios from 'axios'
import { useQuery } from 'react-query'

const axiosInstance = axios.create({
	baseURL: '/api/v1/reminders',
})

export const allReminders = new Promise((resolve, reject) => {
	try {
		const axiosQuery = async () => {
			const res = await axiosInstance({
				method: 'GET',
			})
			return res
		}
		const { data } = useQuery('allReminders', axiosQuery)

		resolve(data)
	} catch (error) {
		reject(error)
	}
})
