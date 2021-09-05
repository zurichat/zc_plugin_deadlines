/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere 30th August 2021, ed_knowah 2nd Spetember 2021, Adedeji Yusuf 2nd Spetember 2021.
* */

import Response from '@utils/response.handler'
import { StatusCodes } from 'http-status-codes'
import { MESSAGE } from '@utils/constant'
import makeFakeReminder from '@utils/fake.reminder'
import axios from 'axios'
import makeDb from '../db'

const { GET_ALL_REMINDERS } = MESSAGE
const { OK } = StatusCodes

const { getDevBaseUrl, ORG_ID, PLUGIN_ID } = env

const BASE_URL = `${getDevBaseUrl()}/data`
const readBaseUrl = `${BASE_URL}/read`
const writeBaseUrl = `${BASE_URL}/write`

const db = makeDb()

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
	// Get reminder using query
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

			// const search = await axios.get(`${readBaseUrl}/zc_reminder/reminders/darwin_organisation`)
			const search = await axios.get(
				'https://reminders.zuri.chat/api/v1/reminders'
			)
			const result = search.data.result.filter((item) => {
				if (
					item.collection_name === taskName &&
					item.payload.priority === priority &&
					item.payload.expiryDate === expiryDate
				)
					return true
				return false
			})

			const data = {
				message: 'Reminder fetched successfully',
				...result,
			}
			Object.freeze(data)
			return res.status(201).json(data)

			// if there is no endpoint to do the above then we use the below code to search the reminder plugin database
			// const search2 = await db.find({ reminderName: taskName, priority: priority})
			// const result2 =  {
			//   message: "Reminder fetched successfully",
			//   ...search2
			// }

			// Object.freeze(result2)
			// return freezed object

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
