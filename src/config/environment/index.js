/**
		Copyright 2021, Zuri plugin reminder.
		All rights reserved.
		Written By: King Etiosasere, 30th August 2021
* */
import dotenv from 'dotenv'

dotenv.config()

const env = {
	PORT: process.env.PORT || 3008,
	BASE_URL: '',
	API_URL: '',
	ENVIRONMENT: {
		development: process.env.NODE_ENV === 'development',
		test: process.env.NODE_ENV === 'test',
		staging: process.env.NODE_ENV === 'staging',
		production: process.env.NODE_ENV === 'production',
	},
	MONGODB: {
		url: process.env.MONGO_DB_URL,
	},
	MAIL: {
		email: process.env.SSN_FOR_ORGS_MAIL,
	},
	PLUGIN_ID: '',
	ORG_ID: '',
	// Cetrifugo Credentials
	SOCKET_KEY: process.env.SOCKET_TOKEN,
	SOCKET_URL: process.env.SOCKET_URL,

	getDevBaseUrl() {
		const self = env
		if (
			process.env.NODE_ENV === 'development' ||
			process.env.NODE_ENV === 'test'
		) {
			self.API_URL = `http://localhost:${self.PORT}/api/v1`
			self.BASE_URL = 'https://mock-dbapi.herokuapp.com/api'
			self.PLUGIN_ID = 'zc_reminder'
			self.ORG_ID = 'darwin_organization'
		} else {
			self.API_URL = `http://localhost:${self.PORT}/api/v1`
			self.BASE_URL = 'https://api.zuri.chat'
			self.PLUGIN_ID = '61392d9999bd9e223a37d92a' // DON'T CHANGE
			self.ORG_ID = '6139b25859842c7444fb01f4' // DON'T CHANGE
			self.SOCKET_KEY =
				process.env.SOCKET_TOKEN || '58c2400b-831d-411d-8fe8-31b6e337738b'
			self.SOCKET_URL =
				process.env.SOCKET_URL || 'https://realtime.zuri.chat/api'
		}
		return {
			apiUrl: self.API_URL,
			baseUrl: self.BASE_URL,
			pluginId: self.PLUGIN_ID,
			orgId: self.ORG_ID,
			socketKey: self.SOCKET_KEY,
			socketUrl: self.SOCKET_URL,
		}
	},
}

export default env
