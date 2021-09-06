import axios from 'axios'
import { useQuery } from 'react-query'

const axiosInstance = axios.create({
	baseURL: '/api/v1/search',
})

export const search = new Promise((resolve, reject) => {
	try {
		const axiosQuery = async () => {
			const res = await axiosInstance({
				method: 'GET',
			})
			return res
		}
		const { data } = useQuery('search', axiosQuery)

		resolve(data)
	} catch (error) {
		reject(eror)
	}
})
