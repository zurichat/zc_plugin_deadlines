/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere 30th August 2021, ed_knowah 2nd Spetember 2021.
* */

const db = makeDb()
const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},

	findAll: async (req, res) => {
		// eslint-disable-next-line consistent-return
		try {
			const reminders = await db.getAllReminders()
			res.json({
				allReminders: reminders,
			})
		} catch (error) {
			console.log(error)
			res.json({
				status: 400,
				data: null,
				message: error.message,
			})
		}
	},
}

export default reminderController
