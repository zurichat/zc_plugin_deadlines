import axios from 'axios'
import env from '@config/environment'

const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = env

const BASE_URL = `${getDevBaseUrl()}/data`
const readBaseUrl = `${BASE_URL}/read`
const writeBaseUrl = `${BASE_URL}/write`

export default function makeDb() {
	// functions go here
	/**
	 * Persists data to a db on a thrid party api
	 * @param {string} modelName
	 * @param {[object] | object} data
	 * @returns saved document
	 */
	const create = async (modelName, data) => {
		if (typeof data !== 'object')
			throw new Error('Invalid data format. Expected an array or object.')

		const dbResponse = await axios.post(writeBaseUrl, {
			plugin_id: PLUGIN_ID,
			organization_id: ORG_ID,
			collection_name: modelName,
			bulk_write: Array.isArray(data), // returns true if data is an array
			payload: data,
		})

		// Response
		if (Array.isArray(data)) {
			return dbResponse.data.result.map((row) => ({
				id: row.document.object_id,
				...row.document.payload,
			}))
		}
		return {
			id: dbResponse.data.object_id,
			...dbResponse.data.payload,
		}
	}

	async function findAll(modelName) {
		/**
		 * sample of details used
		 * PLUGIN_ID zc_reminder
		 * ORG_ID darwin_organization
		 */
		const data = await axios.get(
			`${readBaseUrl}/${PLUGIN_ID}/${modelName}/${ORG_ID}`
		)

		return data
	}

	return Object.freeze({
		/**
		 * Persists data to a db on a thrid party api
		 * @param {string} modelName
		 * @param {[object] | object} data
		 * @returns saved document
		 */
		create,
		findAll,
	})
}
