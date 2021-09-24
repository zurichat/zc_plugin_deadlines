import axios from 'axios'
import env from '@config/environment'

const { getDevBaseUrl } = env
const { baseUrl } = getDevBaseUrl()
const getUserUrl = `${baseUrl}/auth/verify-token`

const isAuthenticated = async (req, res, next) => {
	try {
		const { authorization } = req.headers
		if (!authorization) throw new Error(`No Authorization or session expired.`)

		const [_, token] = authorization.split(' ')
		if (!token) throw new Error(`No Authorization or session expired.`)

		const response = await axios.get(`${getUserUrl}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		req.user = response.data.data.user
		return next()
	} catch (error) {
		if (!error.name) error.statusCode = 401 // Sets all defined errors to 401

		return next(error)
	}
}

export default isAuthenticated
