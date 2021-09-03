/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import axios from 'axios'

const reminderController = {
	create: async (req, res) => {
		return res.send('heelo')
	},
	setDeadline: async (req, res) => {
		// get inputs from the request body
		const {
			teamsAssigned,
			membersAssigned,
			title,
			description,
			startDates,
			dueDates,
		} = req.body
		// post data to be sent
		const postData = {
			teamsAssigned,
			membersAssigned,
			title,
			description,
			startDates,
			dueDates,
		}
		// axios config
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token For Authentication Here',
			},
		}
		try {
			await axios.post(process.env.MONGO_DB_URL, postData, config)
		} catch (error) {
			console.error(error)
		}
		return res
			.status(201)
			.json({ status: 'success', message: 'Deadline successfully set' })
	},
}

export default reminderController
