import axios from 'axios'
import env from '@config/environment'

const { getDevBaseUrl } = env

const { apiUrl, baseUrl, orgId, pluginId } = getDevBaseUrl()
console.log({ apiUrl, baseUrl, orgId, pluginId })
const readBaseUrl = `${baseUrl}/data/read`
const writeBaseUrl = `${baseUrl}/data/write`
const deleteBaseUrl = `${baseUrl}/data/delete`
// eslint-disable no-underscore-dangle
// eslint-disable class-methods-use-this

/** *
 * create
 * findAll
 * findByid
 * deleteById
 * updateById
 */

export default class DatabaseOps {
	constructor(modelName) {
		this.modelName = modelName
	}

	async create(data) {
		try {
			const res = await axios({
				url: writeBaseUrl,
				method: 'post',
				data: {
					plugin_id: pluginId,
					organization_id: orgId,
					collection_name: this.modelName,
					bulk_write: Array.isArray(data), // returns true if data is an array
					payload: data,
				},
			})
			// Response
			return res.data.data
		} catch (error) {
			throw new Error(
				'Server Internal error, we will figure it out, try again later'
			)
		}
	}

	async findAll() {
		const url = `${readBaseUrl}/${pluginId}/${this.modelName}/${orgId}`
		try {
			const res = await axios({
				url,
				method: 'get',
			})
			return res.data.data.map((row) => this.render(row))
		} catch (error) {
			throw new Error(
				'Server Internal error, we will figure it out, try again later'
			)
		}
	}

	async findById(id) {
		const url = `${readBaseUrl}/${pluginId}/${this.modelName}/${orgId}?_id=${id}`
		try {
			const res = await axios({
				url,
				method: 'get',
			})

			return res.data.data ? this.render(res.data.data) : null
		} catch (error) {
			throw new Error(
				'Server Internal error, we will figure it out, try again later'
			)
		}
	}

	async deleteOne(id) {
		try {
			const res = await axios({
				url: deleteBaseUrl,
				method: 'post',
				data: {
					plugin_id: pluginId,
					organization_id: orgId,
					collection_name: this.modelName,
					bulk_write: false,
					object_id: id,
				},
			})
			return res.data.data
		} catch (error) {
			console.log(error.message)
			throw new Error(
				'Server Internal error, we will figure it out, try again later'
			)
		}
	}

	async updateById(id, data) {
		try {
			const res = await axios({
				method: 'put',
				url: writeBaseUrl,
				data: {
					plugin_id: pluginId,
					organization_id: orgId,
					collection_name: this.modelName,
					object_id: id,
					payload: data,
				},
			})
			return res.data.data.modified_document > 0
		} catch (error) {
			throw new Error(
				'Server Internal error, we will figure it out, try again later'
			)
		}
	}

	/* eslint class-methods-use-this: 0 */
	async search(data, query) {
		console.log('INCOMING', data, query)
		// const result = data.filter((item) => item.title === query)
		let formattedQuery = query.toLowerCase()
		const result = data.filter((item) => {
		return item.title.toLowerCase() === formattedQuery || 
			  item.creator.toLowerCase() === formattedQuery ||
			  // item.priority.toLowerCase() === formattedQuery || 
			  item.description.toLowerCase() === formattedQuery
		})
		console.log('RESULT GOTTEN', result)
		return result
	}	

	// Helper
	render(data) {
		// Change the `_id` field to `object_id` for uniformity
		/* eslint no-underscore-dangle:0 */
		data.object_id = data._id
		delete data._id

		return data
	}
}
