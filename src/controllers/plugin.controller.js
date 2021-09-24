import Response from '@utils/response.handler'
import env from '@config/environment'
import DatabaseOps from '../db/index'
import { Room } from './room.controller'

const { getDevBaseUrl } = env

const value = getDevBaseUrl()

// helper function to sort user's private and public rooms
const sortRooms = (rooms, userId) => {
	let matchedRooms = []
	let publicRooms = []

	if (Array.isArray(rooms) && rooms.length) {
		matchedRooms = rooms.filter(
			(room) =>
				room.members.some((u) => u.userId === userId) ||
				room.creator.userId === userId
		)
		publicRooms = rooms.filter((room) => room.isPrivate === false)
	}
	return { matchedRooms, publicRooms }
}

const sidebarController = {
	getSideBar: async (req, res, next) => {
		try {
			const { orgId, userId } = req.query

			// Get the User details and check if the user is logged into the organization

			const rooms = await Room.findAll(orgId)
			const { matchedRooms, publicRooms } = sortRooms(rooms, userId)
			const sidebar = {
				name: 'Reminders Plugin',
				description: 'The Reminders plugin',
				plugin_id: value.pluginId,
				organisation_id: orgId,
				user_id: userId,
				group_name: 'Darwin Organisation',
				show_group: true,
				joined_rooms: matchedRooms,
				public_rooms: publicRooms,
			}

			return Response.send(
				res,
				200,
				sidebar,
				'User Sidebar Information Retrieved',
				true
			)
		} catch (err) {
			return next(err)
		}
	},
	getPluginInfo: async (req, res) => {
		const pluginInfo = {
			type: 'Plugin Information',
			Plugin_info: {
				name: 'Reminders Plugin',
				description: [
					'Zuri.chat plugin',
					'Reminders plugin for Zuri Chat that enables users set deadlines for task(s), add assignees to specific tasks, and get notified of upcoming deadlines',
				],
			},
			scaffold_structure: 'Monolith',
			team: 'HNG 8.0/Team Darwin',
			sidebar_url: 'https://reminders.zuri.chat/api/v1/sidebar',
			ping_url: 'https://reminders.zuri.chat/api/v1/ping',
			homepage_url: 'https://reminders.zuri.chat/',
		}

		return Response.send(
			res,
			200,
			pluginInfo,
			'Plugin Information Retrieved',
			true
		)
	},
}

export default sidebarController
