import reminderController from '@controllers/reminder.controller'
import makeDb from './db'

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'allReminders.json')

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
	const data = await reminderController.getAll()
	console.log(data.data.result.length)
	fs.createWriteStream(filePath, { flags: 'a' }).write(
		JSON.stringify(data.data.result, null, 2)
	)
})

module.exports = agenda
