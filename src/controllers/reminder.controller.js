/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere 30th August 2021, ed_knowah 2nd Spetember 2021.
* */

import Response from '@utils/response.handler'
import { StatusCodes } from 'http-status-codes'
import { MESSAGE } from '@utils/constant'
import makeFakeReminder from '@utils/fake.reminder'
import env from '@config/environment'
import makeDb from '../db'

const Agenda = require('agenda')

const { GET_ALL_REMINDERS } = MESSAGE
const { OK } = StatusCodes
const { MONGODB } = env
const db = makeDb()

const zuriCoreDBApi = `mock`

const reminderController = {
	create: async (req, res, next) => {
		const { priority, expiryDate, description, shouldRemind } = req.body
		try {
			const reminderData = { priority, expiryDate, description, shouldRemind }

			const savedRecord = await db.create('reminders', reminderData)

			return Response.send(
				res,
				201,
				savedRecord,
				'Reminder created successfully',
				true
			)
		} catch (error) {
			return next(error)
		}
	},
	getAll: async (req, res, next) => {
		try {
			const data = await db.findAll('reminders')
			return Response.send(
				res,
				data.status,
				data.data,
				data.statusText,
				data.status === 200
			)
		} catch (err) {
			return next(err)
		}
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

			return res.status(400).json(errorResult)
		}
	},
	getUpcomingReminders: async (req, res, next) => {
		try {
			const reminder = [
				makeFakeReminder({ shouldRemind: 'Every 2 days' }),
				makeFakeReminder({ shouldRemind: 'Every 1 hour' }),
				makeFakeReminder({ shouldRemind: 'Every day' }),
				makeFakeReminder({ shouldRemind: 'Every 30 minutes' }),
			]
			Response.send(res, StatusCodes.OK, reminder, 'Upcoming reminders')
		} catch (error) {
			Response.send(
				res,
				StatusCodes.BAD_REQUEST,
				null,
				'An error occured getting upcoming reminders'
			)
		}
	},


	getOneHourToGoReminder: async (req, res) => {
		try {
			const agenda = new Agenda({
				db: { address: MONGODB.url, collection: 'jobScheduler' },
			})

			agenda.define('one hour reminder', async (job) => {
				console.log('Agenda Invoked')
				const data = await db.findAll('Reminders')

				const queue = []
				data.data.result.map((element) => {
					if (
						element.payload === undefined ||
						element.payload.expiryDate === undefined
					) {
						return false
					}
					const date = new Date()
					const currentDate = date.getTime()
					const endDate = new Date(element.payload.expiryDate).getTime()
					const timeLeft = Math.ceil((currentDate - endDate) / 3600000)
					if (timeLeft === 60) {
						queue.push(element)
					}
					return true
				})
				const additionalInfo =
					queue.length === 0
						? 'No Match Found'
						: `${queue.length} matches found`
				return res.status(200).json({
					data: queue,
					message: 'Successful',
					status: 200,
					additionalInfo,
				})
			})
			;(async () => {
				await agenda.start()
				await agenda.every('60 seconds', 'one hour reminder')
			})()

			return true
		} catch (error) {
			return res.json({
				status: 400,
				data: null,
				message: error.message,
			})
		}
	},

	deleteReminder: async (req, res, next) => {
		const {
			params: { id },
		} = req

		try {
			if (!id) {
				throw new Error('id is required')
			}

			const deleteReminder = await db.deleteOne('reminders', id)

			return Response.send(
				res,
				deleteReminder.status,
				deleteReminder.data,
				deleteReminder.statusText,
				deleteReminder.status === 201
			)
		} catch (error) {
			return next(error)
		}
	},
}

export default reminderController
