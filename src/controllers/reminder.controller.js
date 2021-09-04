/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},

	deleteReminder: async (req, res) => {
		try {
			if (!id) {
				throw new Error('id is required')
			}

			const db = makeDb()
			const deleteReminder = await db.findByIdAndDelete(req.params.id)
			res.status(200).send(deleteReminder)
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
