/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import Response from '@utils/response.handler'

import { StatusCodes } from 'http-status-codes'

import { MESSAGE } from '@utils/constant'
import axios from 'axios'
import makeDb from '../db'

const { GET_ALL_REMINDERS } = MESSAGE

const { OK } = StatusCodes

const db = makeDb()

const zuriCoreDBApi = `mock`

const reminderController = {
	// TODO: call Zuri core Db API
	create: async (req, res) => {
		return res.send('heelo')
	},
	getAll: async (req, res) => {
		const data = await db.findAll('reminders')
		return Response.send(
			res,
			data.status,
			data.data,
			data.statusText,
			data.status === 200
		)
	},

	/**
    Search reminder from the database using query
    @param {taskName} reminder name to be searched 
    @param {priority} priority of the reminder to be searched
    @param {expiryDate} expiry date of the reminder to be searched
    @returns {result} reminder fetched from the database 
*/

	// Get reminder based on the parameter @Comurule created
	getReminder: async (req, res) => {
		const { taskName, priority, expiryDate } = req.param

		if (
			typeof taskName !== 'string' &&
			typeof priority !== 'string' &&
			typeof expiryDate !== 'string'
		)
			throw new Error('Invalid data format. Expected a string.')

		try {
			// if there is any endpoint in the zc_core to provide us the search through our reminder database to fetch each reminder, then we use this search and the API will be `${zcDBApi}`
			const search = await axios.post(zuriCoreDBApi, {
				reminderName: taskName,
				priority,
				expiryDate,
			})

			const result = {
				message: 'Reminder fetched successfully',
				...search,
			}

			Object.freeze(result)

			return res.status(201).json(result)

			// if there is no endpoint to do the above then we use the below code to search the reminder plugin database
			// const search2 = await db.find({ reminderName: taskName, priority: priority})
			// const result2 =  {
			//   message: "Reminder fetched successfully",
			//   ...search2
			// }

			// Object.freeze(result2)

			// return res.status(201).json(result2)
		} catch (error) {
			const errorResult = {
				message: 'Reminder not fetched',
				error,
			}

			Object.freeze(errorResult)

			return res.status(400).json(errorResult)
		}
	},
}

export default reminderController
