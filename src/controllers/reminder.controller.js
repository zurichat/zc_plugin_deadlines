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
	// Get search reminder using query
	searchReminder: async (req, res, next) => {
		const { priority, expiryDate } = req.query

		if (typeof priority !== 'string' || typeof expiryDate !== 'string')
			throw new Error('Invalid data format. Expected a string.')

		const searchFunction = (data, query) => {
			const result = data.data.result.filter((item) => {
				if (
					item.payload.priority === query.priority ||
					item.payload.expiryDate === query.expiryDate
				)
					return true
				return false
			})
			return result
		}

		try {
			// if there is any endpoint in the zc_core to provide us the search through our reminder database to fetch each reminder, then we use this search and the API will be `${zcDBApi}`

			const search = await axios.get(
				'https://reminders.zuri.chat/api/v1/reminders'
			)

			const result = await searchFunction(search, req.query)

			return Response.send(
				res,
				201,
				result,
				'Reminder fetched successfully',
				search.status === 200
			)
		} catch (error) {
			return next(err)
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
			if (!req.params.id) {
				return Response.send(
					res,
					StatusCodes.BAD_REQUEST,
					null,
					'No id provided'
				)
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
