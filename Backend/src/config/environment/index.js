/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
import dotenv from 'dotenv'

dotenv.config()

const env = {
	PORT: process.env.PORT,
	ENVIRONMENT: {
		development: process.env.NODE_ENV === 'development',
		test: process.env.NODE_ENV === 'test',
		staging: process.env.NODE_ENV === 'staging',
		production: process.env.NODE_ENV === 'production',
	},
	AUTH: {
		JWT_SECRET: process.env.JWT_SECRET,
	},
	MONGODB: {
		url: process.env.MONGO_DB_URL,
	},
	MAIL: {
		email: process.env.SSN_FOR_ORGS_MAIL,
	},
}

export default env
