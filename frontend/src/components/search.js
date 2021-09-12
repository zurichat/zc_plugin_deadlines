import axios from 'axios'
import { RemindersContext } from '../context/RemindersContext'

export const axiosInstance = axios.create({
	baseURL: '/api/v1/search',
})

const { remindersDispatch: dispatch } = useContext(RemindersContext)

export const onChange = (e, { value }) => {
	const searchText = value.trim().replace(/" "/g, '')

	searchReminders(searchText)(dispatch)
}
