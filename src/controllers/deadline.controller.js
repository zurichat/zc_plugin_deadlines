import Response from '@utils/response.handler'
// eslint-disable-next-line import/no-unresolved

import sortedData from '@utils/sort.deadlines'
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
			priority,
			shouldRemind,
			reminders,
		} = req.body
		const status = req.body.status || 'pending' // adding a default for status field
		const creator = {
			userId: req.user.id,
			userName:
				req.user.display_name || `${req.user.first_name} ${req.user.last_name}`,
			userLink: `https://api.zuri.chat/users/${req.user.id}`,
		} // adding the creator field as the logged in user
		const { orgId } = req.params

		try {
			const createData = {
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
			}
			const savedRecord = await DeadLine.create(createData, orgId)
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
			const { orgId } = req.params
			let data = await DeadLine.findAll(orgId)

			if (req.query.sort) {
				data = sortedData(req.query.sort, data)
			}

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
			const { orgId, id } = req.params
			const data = await DeadLine.findById(id, orgId)

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
			const { orgId, id } = req.params
			const data = await DeadLine.deleteOne(id, orgId)
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

		const updateData = {
			title,
			description,
			startDate,
			dueDate,
			assignee,
			priority,
			shouldRemind,
			reminders,
			status,
		}
		const { orgId, id } = req.params
		try {
			const data = await DeadLine.updateById(id, updateData, orgId)

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
			const result = await DeadLine.findAll('deadlines')
			const data = await DeadLine.search(result, text)
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
