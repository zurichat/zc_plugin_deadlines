/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, ed_knowah 30th August 2021
* */
const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},

	getReminders: async (req, res) => {
		// eslint-disable-next-line consistent-return
		const getReminders = async () => {
			try {
				return await axios.get(process.env.MONGO_DB_URL)
			} catch (error) {
				console.error(error)
			}
		}
		const reminders = async () => {
			const foundReminders = await getReminders()
			return res.send(foundReminders.data)
		}

		return reminders()
	},
}

export default reminderController
