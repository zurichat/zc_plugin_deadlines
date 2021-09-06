// eslint-disable-next-line import/no-unresolved
const faker = require('faker')
const axios = require('axios').default
// const environment = require('./src/config/environment/index')

// const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = environment

// const BASE_URL = `${getDevBaseUrl()}/data`
// const readBaseUrl = `${BASE_URL}/read`
// const writeBaseUrl = `${BASE_URL}/write`

async function populateDB() {
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < 200; i++) {
		const obj = {
			plugin_id: 'zc_reminder',
			organization_id: 'darwin_organization',
			collection_name: 'reminders',
			payload: {
				title: faker.random.word(),
				description: faker.random.words(),
				assignees: faker.name.firstName(),
				creator: faker.name.findName(),
				startDate: faker.date.recent(),
				dueDate: faker.date.soon(),
				time: faker.time.recent(),
			},
		}

		// eslint-disable-next-line no-await-in-loop
		const res = await axios({
			url: 'https://mock-dbapi.herokuapp.com/api/data/write',
			method: 'post',
			data: {
				plugin_id: 'zc_reminder',
				organization_id: 'darwin_organization',
				collection_name: 'reminders',
				payload: {
					title: faker.random.word(),
					description: faker.random.words(),
					assignees: faker.name.firstName(),
					creator: faker.name.findName(),
					startDate: faker.date.recent(),
					dueDate: faker.date.soon(),
					time: faker.time.recent(),
				},
				// obj,
			},
		})
		console.log(i)
	}
}

populateDB()
