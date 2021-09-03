// Example

import axios from 'axios'
import { useQuery } from 'react-query'

const axiosInstance = axios.create({
	baseURL: '/api/v1',
})

export const authState = new Promise((resolve, reject) => {
	try {
		const axiosQuery = async () => {
			const res = await axiosInstance({
				url: '/authState',
				method: 'GET',
			})
			return res
		}

		const { data } = useQuery('authQuery', axiosQuery)

		resolve(data)
	} catch (error) {
		reject(error)
	}
})
