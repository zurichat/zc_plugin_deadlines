import axios from 'axios'

import env from '@config/environment'
import { get } from 'mongoose'

const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = env

export default function makeDb() {
	// functions go here
	const BASE_URL = `${getDevBaseUrl()}/data`
	const readBaseUrl = `${BASE_URL}/read`
	const writeBaseUrl = `${BASE_URL}/write`

	async function findAll(collectionName) {
		/**
		 * sample of details used
		 * PLUGIN_ID zc_reminder
		 * ORG_ID darwin_organization
		 */
		const data = await axios.get(
			`${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORG_ID}`
		)

		return data
	}

	async function findById(collectionName, id) {
		try {
			const res = await axios({
				url: `${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORG_ID}?id=${id}`,
				method: get,
			})
			return res.data.data
		} catch (error) {
			return error.response.data
		}
	}
	return Object.freeze({ findAll, findById })
}
