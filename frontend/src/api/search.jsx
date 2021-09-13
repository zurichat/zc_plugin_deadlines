import axios from 'axios'
//import { useQuery } from 'react-query'
import { RemindersContext } from '../context/RemindersContext'
//import { Input } from 'postcss'
/*
import { Input } from 'postcss'
import { Input } from 'postcss'
*/

const axiosInstance = axios.create({
	baseURL: '/api/v1/search',
})

const { remindersDispatch: dispatch } = useContext(RemindersContext)

const onChange = (e, { value }) => {
	const searchText = value.trim().replace(/" "/g, '')

	searchReminders(searchText)(dispatch)
}

/*const search = () => {
	return (
		<div>
			<Input onChange={onChange} />
		</div>
	)
} */

/*
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
		reject(error)
	}
})
*/

console.log(axiosInstance)
