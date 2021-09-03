import { StatusCodes } from 'http-status-codes'
import makeDb from './db'

const db = makeDb()

const Agenda = require('agenda')

// const connectionString = 'mongodb://127.0.0.1/our-app-db'

const agenda = new Agenda({
	db: {
		address:
			'mongodb+srv://moneyguard:HE7ng3jfkIdrJAXP@staging-db.n6neu.mongodb.net/rytouch?retryWrites=true&w=majority',
		collection: 'jobScheduler',
		useUnifiedTopology: true,
	},
})

agenda.define('schedule reminders', async (job) => {
	console.log('hey there')
	const data = await db.findAll('reminders')
	console.log(data.data.result.length)
})

module.exports = agenda
