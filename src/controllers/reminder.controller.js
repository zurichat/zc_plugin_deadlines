/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere 30th August 2021, ed_knowah 2nd Spetember 2021, Adedeji Yusuf 2nd Spetember 2021.
* */

import Response from '@utils/response.handler'
// eslint-disable-next-line import/no-unresolved
import { StatusCodes } from 'http-status-codes'
import { MESSAGE } from '@utils/constant'
import env from '@config/environment'
// import makeDb from '../db'
import DatabaseOps from '../db'

const { GET_ALL_REMINDERS } = MESSAGE
const { OK } = StatusCodes

const db = new DatabaseOps()
const Agenda = require('agenda')

const { MONGODB } = env

const reminderController = {
	create: async (req, res, next) => {
		try {
			const savedRecord = await db.create({
				modelName: 'deadlines',
				...req.body,
			})
			console.log(savedRecord)
			return Response.send(
				res,
				201,
				savedRecord,
				'Deadline created successfully'
			)
		} catch (error) {
			return next(error)
		}
	},
	getAll: async (req, res, next) => {
		try {
			const data = await db.findAll('deadlines')
			return Response.send(
				res,
				200,
				data,
				'Deadlines retrieved successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	getById: async (req, res, next) => {
		try {
			const data = await db.findById({modelName:'deadlines', id: req.params.id})
			return Response.send(
				res,
				200,
				data,
				'Deadline retrieved successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},

	/**
    Search reminder from the database using query
    @param {title} reminder name to be searched 
    @param {creator} creator of the reminder to be searched
    @param {dueDate} Due date of the reminder to be searched
    @returns {result} reminder fetched from the database 
*/
	// Get search reminder using query of {title, creator, dueDate}
	searchReminder: async (req, res, next) => {
		try {
			const { text } = req.body
			const result = await db.findAll('deadlines')
			const data = db.search(result, text)
			return Response.send(
				res,
				200,
				data,
				'Deadlines fetched successfully',
				true
			)
		} catch (error) {
			return next(error)
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
		console.log(req.params.id)
		const { id } = req.params

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
				deleteReminder.status === 200
			)
		} catch (error) {
			return next(error)
		}
	},
	updateById: async (req, res) => {
		const { priority, expiryDate, description, shouldRemind } = req.body

		try {
			const reminderData = { priority, expiryDate, description, shouldRemind }

			const { id } = req.params

			if (!id) {
				throw new Error('id is required')
			}

			const updateReminder = await db.findByIdAndupdate(id, reminderData)

			res.status(200).send('reminder updated successfully ')
		} catch (error) {
			console.log(error)
			res.json({
				status: 400,
				data: null,
				message: error.message.data,
			})
		}
	},
}

export default reminderController
