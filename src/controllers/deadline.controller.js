import Response from '@utils/response.handler'
// eslint-disable-next-line import/no-unresolved
import { StatusCodes } from 'http-status-codes'
import { MESSAGE } from '@utils/constant'
import env from '@config/environment'
// import makeDb from '../db'
import DatabaseOps from '../db'

const DeadLine = new DatabaseOps('deadlines')
const Agenda = require('agenda')

const deadlineController = {
	create: async (req, res, next) => {
		const {
			title,
			description,
			startDate,
			dueDate,
			assignee,
			creator,
			priority,
			shouldRemind,
			reminders,
		} = req.body
		const status = req.body.status || 'uncompleted' // adding a default for status field

		try {
			const savedRecord = await DeadLine.create({
				title,
				description,
				startDate,
				dueDate,
				assignee,
				creator,
				priority,
				shouldRemind,
				reminders,
				status,
			})
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
			const data = await DeadLine.findAll()

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
			const data = await DeadLine.findById(req.params.id)

			if (!data) {
				return Response.send(res, 404, data, 'Deadline not found', false)
			}

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
	deleteById: async (req, res, next) => {
		try {
			const data = await DeadLine.deleteOne(req.params.id)
			return Response.send(
				res,
				200,
				data,
				'Deadline deleted successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	updateById: async (req, res, next) => {
		const {
			title,
			description,
			startDate,
			dueDate,
			assignee,
			priority,
			shouldRemind,
			reminders,
			status,
		} = req.body
		try {
			const data = await DeadLine.updateById(req.params.id, {
				title,
				description,
				startDate,
				dueDate,
				assignee,
				priority,
				shouldRemind,
				reminders,
				status,
			})

			if (!data) {
				return Response.send(
					res,
					404,
					data,
					'Deadline with that ID not found!',
					false
				)
			}

			return Response.send(
				res,
				200,
				data,
				'Deadline updated successfully',
				true
			)
		} catch (err) {
			return next(err)
		}
	},

	/**
		Search deadline from the database using query
		@param {title} deadline name to be searched 
		@param {creator} creator of the deadline to be searched
		@param {dueDate} Due date of the deadline to be searched
		@returns {result} deadline fetched from the database 
*/
	// Get search Deadline using query of {title, creator, dueDate}
	searchDeadline: async (req, res, next) => {
		try {
			const { text } = req.body
			const result = await db.findAll('deadlines')
			const data = await db.search(result, text)
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
}

export default deadlineController
