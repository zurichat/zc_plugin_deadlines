import Response from '@utils/response.handler'
import DatabaseOps from '../db'

const Room = new DatabaseOps('rooms')

const roomController = {
	create: async (req, res, next) => {
		// "_id": "613b6aed41f5856617552f26", // Auto-generated
		// "createdAt": "2021-09-10T14:25:38.492Z",  // Auto-generated
		// "iconUrl": "https://zuri.chat/zurichatlogo.svg", // Default value
		// "isArchived": false, // Default value
		// "isPrivate": true,
		// "members": [
		// 	"6139fe2859842c7444fb0218"
		// ],
		// "organisationId": "6133c5a68006324323416896",
		// "ownerId": "6139fe2859842c7444fb0218",
		// "pluginId": "6134c6a40366b6816a0b75cd",
		// "roomId": "f1d268d3-f6af-4038-8bfd-bfb6fc80bbfb", // Auto-generated
		// "roomName": "All Files",
		// "roomType": "plugin"

		const { title, description, iconUrl, members, organizationId, ownerId } =
			req.body
		const isArchived = req.body.is_archived || false
		const isPrivate = req.body.is_private || false

		try {
			const savedRecord = await Room.create({
				title,
				description,
				iconUrl,
				isArchived,
				isPrivate,
				members,
				ownerId,
			})
			return Response.send(res, 201, savedRecord, 'Room created successfully')
		} catch (error) {
			return next(error)
		}
	},
	getAll: async (req, res, next) => {
		try {
			const data = await Room.findAll()

			return Response.send(res, 200, data, 'Rooms retrieved successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	getById: async (req, res, next) => {
		try {
			const data = await Room.findById(req.params.id)

			if (!data) {
				return Response.send(res, 404, data, 'Room not found', false)
			}

			return Response.send(res, 200, data, 'Room retrieved successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	deleteById: async (req, res, next) => {
		try {
			const data = await Room.deleteOne(req.params.id)
			return Response.send(res, 200, data, 'Room deleted successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	updateById: async (req, res, next) => {
		const {
			title,
			description,
			iconUrl,
			isArchived,
			isPrivate,
			members,
			organizationId,
			ownerId,
		} = req.body
		try {
			const data = await Room.updateById(req.params.id, {
				title,
				description,
				iconUrl,
				isArchived,
				isPrivate,
				members,
				ownerId,
			})

			if (!data) {
				return Response.send(
					res,
					404,
					data,
					'Room with that ID not found!',
					false
				)
			}

			return Response.send(res, 200, data, 'Room updated successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	addToRoom: async (req, res, next) => {
		try {
			const { userId } = req.query
			const { id } = req.params

			const savedRoom = await Room.findById(id)
			if (!savedRoom) {
				return Response.send(
					res,
					404,
					savedRoom,
					'Room with that ID not found!',
					false
				)
			}

			const updatedata = {
				...savedRoom,
				members: savedRoom.members.push(userId),
			}

			const response = await Room.updateById(id, updatedata)

			return Response.send(
				res,
				200,
				response,
				`User, with id:${userId}, added successfully`,
				true
			)
		} catch (error) {
			return next(error)
		}
	},
	deleteFromRoom: async (req, res, next) => {
		try {
			const { userId } = req.query
			const { id } = req.params

			const savedRoom = await Room.findById(id)
			if (!savedRoom) {
				return Response.send(
					res,
					404,
					savedRoom,
					'Room with that ID not found!',
					false
				)
			}

			const updatedata = {
				...savedRoom,
				members: savedRoom.members.filter((u) => u !== userId),
			}

			const response = await Room.updateById(id, updatedata)

			return Response.send(
				res,
				200,
				response,
				`User, with id:${userId}, removed successfully`,
				true
			)
		} catch (error) {
			return next(error)
		}
	},
}

export default roomController
