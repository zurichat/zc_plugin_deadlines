import Response from '@utils/response.handler'
import DatabaseOps from '../db/index'
import env from '@config/environment'

const { getDevBaseUrl } = env

const value = getDevBaseUrl()
const db = new DatabaseOps()

const sidebarController = {
	addToRoom: async (req, res, next) => {
		try {
			const { userId, orgId, token, title } = req.query
			const room = await db.addToRoom({
				name: 'Company important deadline plugin',
				description: 'To remind you about important stuff yo!',
				pluginId: value.pluginId,
				organizationId: orgId,
				user: userId,
				title,
			})
			Response.send(res, 200, room, 'Room created successfully', true)
		} catch (error) {
			next(error)
		}
	},
	deleteFromRoom: async (req, res, next) => {
		try {
			const { userId } = req.query
			const data = await db.removeFromRoom({ userId })
			return Response.send(res, 200, data, 'User removed successfully', true)
		} catch (err) {
			return next(err)
		}
	},
	getSideBar: async (req, res, next) => {
		try {
			const { pluginId, orgId, userId } = req.query
			const rooms = await db.getRooms()
		} catch (err) {
			return next(err)
		}
	},
}

export default sidebarController
