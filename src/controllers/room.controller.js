import Response from '@utils/response.handler'
import DatabaseOps from '../db'

export const Room = new DatabaseOps('rooms')

const roomController = {
	create: async (req, res, next) => {
		const { title, description, iconUrl, members } = req.body
		const isArchived = req.body.is_archived || false
		const isPrivate = req.body.is_private || false

		const creator = {
			userId: req.user.id,
			userName:
				req.user.display_name || `${req.user.first_name} ${req.user.last_name}`,
			userLink: `https://api.zuri.chat/users/${req.user.id}`,
		} 

		// add the creator to the members list
		members.push(creator) 

		const { orgId } = req.params

		try {
			const createData = {
				title,
				description,
				iconUrl,
				isArchived,
				isPrivate,
				members,
				creator,
			}
			const savedRecord = await Room.create(createData, orgId)

			return Response.send(res, 201, savedRecord, 'Room created successfully')
		} catch (error) {
			return next(error)
		}
	},
	getAll: async (req, res, next) => {
		try {
			const { orgId } = req.params
			const data = await Room.findAll(orgId)

			return Response.send(res, 200, data, 'Rooms retrieved successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	getById: async (req, res, next) => {
		try {
			const { orgId, id } = req.params
			const data = await Room.findById(id, orgId)

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
			const { orgId, id } = req.params
			const data = await Room.deleteOne(id, orgId)
			return Response.send(res, 200, data, 'Room deleted successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	updateById: async (req, res, next) => {
		const { title, description, iconUrl, isArchived, isPrivate, members } =
			req.body

		const updateData = {
			title,
			description,
			iconUrl,
			isArchived,
			isPrivate,
			members,
		}

		const { orgId, id } = req.params
		try {
			const data = await Room.updateById(id, updateData, orgId)

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
			const { user } = req.body
			const { id, orgId } = req.params

			const savedRoom = await Room.findById(id, orgId)
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
				members: savedRoom.members.push(user),
			}

			const response = await Room.updateById(id, updatedata, orgId)

			return Response.send(
				res,
				200,
				response,
				`User, with id:${user.id}, added successfully`,
				true
			)
		} catch (error) {
			return next(error)
		}
	},
	deleteFromRoom: async (req, res, next) => {
		try {
			const { user } = req.body
			const { id, orgId } = req.params

			const savedRoom = await Room.findById(id, orgId)
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
				members: savedRoom.members.filter((u) => u.id !== user.id),
			}

			const response = await Room.updateById(id, updatedata, orgId)

			return Response.send(
				res,
				200,
				response,
				`User, with id:${user.id}, removed successfully`,
				true
			)
		} catch (error) {
			return next(error)
		}
	},
}

export default roomController
