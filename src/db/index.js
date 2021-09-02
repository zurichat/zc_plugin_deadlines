import axios from 'axios'

const DATAPOINT_URL = 'https://mock-dbapi.herokuapp.com/api'

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

		const dbResponse = await axios.post(`${DATAPOINT_URL}/data/write`, {
			plugin_id: '100001',
			organization_id: '10000001',
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

	return Object.freeze({
		/**
		 * Persists data to a db on a thrid party api
		 * @param {string} modelName
		 * @param {[object] | object} data
		 * @returns saved document
		 */
		create,
	})
}
