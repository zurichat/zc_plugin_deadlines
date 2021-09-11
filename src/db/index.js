import axios from 'axios'
import env from '@config/environment'

const { getDevBaseUrl } = env

const { apiUrl, baseUrl, orgId, pluginId } = getDevBaseUrl()
console.log({ apiUrl, baseUrl, orgId, pluginId })
const readBaseUrl = `${baseUrl}/data/read`
const writeBaseUrl = `${baseUrl}/data/write`

/** *
 * create
 * findAll
 * findByid
 * deleteById
 * updateById
 */

export default class DatabaseOps {
	async create({ modelName, ...data }) {
		console.log(typeof modelName)
		const res = await axios({
			url: writeBaseUrl,
			method: 'post',
			data: {
				plugin_id: pluginId,
				organisation_id: orgId,
				collection_name: modelName,
				bulk_write: Array.isArray(data), // returns true if data is an array
				payload: data,
			},
		})
		// Response
		if (Array.isArray(data)) {
			return res.data.data.map((row) => ({
				id: row.document.object_id,
				...row.document.payload,
			}))
		}
		return res.data.data
	}

	async findAll({ modelName }) {
		try {
			const res = await axios({
				url: `${readBaseUrl}/${pluginId}/${modelName}/${orgId}`,
				method: 'get',
			})
			return res.data.data
		} catch (error) {
			return error.response
		}
	}
	async findById({ modelName, id }) {
		const urls = `${readBaseUrl}/${pluginId}/${modelName}/${orgId}?_id=${id}`
		console.log(urls)
		try {
			const res = await axios({
				url: `${readBaseUrl}/${pluginId}/${modelName}/${orgId}?_id=${id}`,
				method: 'get',
			})
			console.log(res.data.data)
			return res.data.data[0]
		} catch (error) {
			if (!error.response) {
				throw new Error(
					'Server Internal error, we will figure it out, try again later'
				)
			}
			return error.response
		}
	}

	async deleteOne(collectionName, id) {
		try {
			const res = await axios.delete(writeBaseUrl, {
				data: {
					plugin_id: pluginId,
					organization_id: orgId,
					collection_name: collectionName,
					bulk_write: false,
					object_id: id,
				},
			})
			return res.data.data
		} catch (error) {
			if (!error.response) {
				throw new Error(
					'Server Internal error, we will figure it out, try again later'
				)
			}
			return error.response
		}
	}

	async updateById({ modelName, id, ...params }) {
		try {
			const res = await axios({
				method: 'put',
				url: writeBaseUrl,
				data: {
					plugin_id: pluginId,
					organisation_id: orgId,
					collection_name: modelName,
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

	async search(data, query) {
		console.log('INCOMING', data, query)
		const result = data.filter((item) => item.title === query)
		console.log('RESULT GOTTEN', result)
		return result
	}

	async addToRoom({ ...params }) {
		const room = await this.create({ modelName: 'rooms', ...params })
		const found = await this.findById({
			modelName: 'rooms',
			id: room.object_id,
		})
		return room
	}

	async removeFromRoom({ userId }) {
		const deleted = await this.deleteOne('rooms', userId)
		console.log({ deleted })
		return deleted
	}

	async getRooms() {
		return this.findAll({ modelName: 'rooms' })
	}
}
