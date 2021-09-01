/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},

	getReminders: async (req, res) => {
		// eslint-disable-next-line consistent-return
		const reminders = async () => {
			try {
				return await axios.get(process.env.DB_URL)
			} catch (error) {
				console.error(error)
			}
		}
		return res.send(reminders)
	},
}

export default reminderController
