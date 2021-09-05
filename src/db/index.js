import axios from 'axios'
import env from '@config/environment'
import { get } from 'mongoose'

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
	// FFF
	async function findAll(modelName) {
		/**
		 * sample of details used
		 * PLUGIN_ID zc_reminder
		 * ORG_ID darwin_organization
		 */

		try {
			const res = await axios.get(
				`${readBaseUrl}/zc_reminder/reminders/darwin_organisation`
			)
			return res
		} catch (err) {
			return err.response
		}
	}

	async function findById(collectionName, id) {
		// findById function that interacts with the database endpoint
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

	async function deleteOne(collectionName, id) {
		// Delete a document by
		try {
			const res = await axios.post(writeBaseUrl, {
				plugin_id: PLUGIN_ID,
				organization_id: ORG_ID,
				collection_name: collectionName,
				bulk_write: false,
				object_id: id,
			})
			return res.data
		} catch (error) {
			return error.response.data
		}
	}

	async function update({ id, ...params }) {
		try {
			const res = await axios({
				method: 'put',
				url: `${getDevBaseUrl()}/data/write`,
				data: {
					plugin_id: PLUGIN_ID,
					organisation_id: ORG_ID,
					collection_name: REMINDER_COLLECTION,
					filter: {
						object_id: id,
					},
					payload: { ...params },
				},
			})
			return res.data.data.modified_document > 0
		} catch (err) {
			return err.response
		}
	}

	return Object.freeze({ create, findAll, update, findById, deleteOne })
}
