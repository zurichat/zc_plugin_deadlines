import axios from 'axios'
import env from '@config/environment'
import { get } from 'mongoose'


const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = env

const BASE_URL = `${getDevBaseUrl().mockApiUrl}/data`
const readBaseUrl = `${BASE_URL}/read`
const writeBaseUrl = `${BASE_URL}/write`

/** *
 * create
 * findAll
 * findByid
 * deleteById
 * updateById
 */

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
		let res
		try {
			if (
				process.env.NODE_ENV === 'development' ||
				process.env.NODE_ENV === 'test'
			) {
				res = await axios({
					url: `${readBaseUrl}/zc_reminder/reminders/darwin_organization`,
					method: 'get',
				})
			}
			res = await axios.get(
				`${readBaseUrl}/${PLUGIN_ID}/${modelName}/${ORG_ID}`
			)
			return res
		} catch (err) {
			if (!err.response) {
				throw new Error(
					'Server Internal error, we will figure it out, try again later'
				)
			}
			return err.response
		}
	}
	const search = (data, query) => {
		const result = data.data.filter((item) => {
			if (
				item.title === query.title ||
				item.description === query.description ||
				item.assignee === query.assignee
			)
				return true
			return false
		})
		return result
	}

	async function findById(collectionName, id) {
		try {
			const res = await axios({
				url: `${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORG_ID}?object_id=${id}`,
				method: get,
			})
			return res
		} catch (error) {
			if (!error.response) {
				throw new Error(
					'Server Internal error, we will figure it out, try again later'
				)
			}
			return error.response
		}
	}

	async function deleteOne(collectionName, id) {
		try {
			const res = await axios.delete(writeBaseUrl, {
				data: {
					plugin_id: PLUGIN_ID,
					organization_id: ORG_ID,
					collection_name: collectionName,
					bulk_write: false,
					object_id: id,
				},
			})
			console.log('res', res)
			return res
		} catch (error) {
			if (!error.response) {
				throw new Error(
					'Server Internal error, we will figure it out, try again later'
				)
			}
			return error.response
		}
	}

	async function updateById({ id, ...params }) {
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
			return err.response.data
		}
	}

	return Object.freeze({
		search,
		create,
		findAll,
		updateById,
		findById,
		deleteOne,
	})
}
