/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */
import makeDb from '../db'

const db = makeDb()

const reminderController = {
	create: async (req, res, next) => {
		const { priority, expiryDate, description, shouldRemind } = req.body
		try {
			const reminderData = { priority, expiryDate, description, shouldRemind }

			const savedRecord = await db.create('Reminders', reminderData)

			return res.status(201).json({
				status: true,
				message: 'Reminder document created successfully',
				data: savedRecord,
			})
		} catch (error) {
			return next(error)
		}
	},
}

export default reminderController
