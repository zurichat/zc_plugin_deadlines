import axios from 'axios'

export default async function makeDb() {
	// functions go here

	// const ZURI_CORE_API = 'https://mock-dbapi.herokuapp.com/api/data'
	// const readBaseUrl = `${ZURI_CORE_API}/read`
	// const PLUGIN_ID = 'reminders_id'
	// const ORGANIZATION_ID = 'Darwin_organization'

	// const findById = async (collectionName, id) => {
	// 	try {
	// 		const res = await axios.get(
	// 			`${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORGANIZATION_ID}?id=${id}`
	// 		)
	// 		return res.data
	// 	} catch (err) {
	// 		console.log(err)
	// 	}

	// 	// await axios.get(`${readBaseUrl}/${PLUGIN_ID}/${collectionName}/${ORGANIZATION_ID}?id=${id}`)
	// 	// 	.then(res => {
	// 	// 		res.filter(function (id) {
	// 	// 			return id === this.state.query
	// 	// 		})
	// 	// 	})
	// 	// 	.catch((err) => {
	// 	// 		console.log(err)
	// 	// 	})
	// }
	return Object.freeze({ findById })
}
