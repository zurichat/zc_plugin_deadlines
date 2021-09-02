/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},

	deleteById: async (req, res) => {
		try {
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
