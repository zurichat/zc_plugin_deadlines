import Response from '@utils/response.handler'
import env from '@config/environment'
import DatabaseOps from '../db/index'

const { getDevBaseUrl } = env

const value = getDevBaseUrl()
const db = new DatabaseOps()

const sidebarController = {
	getInfo: (req, res) => {
		const pluginInfo = {
			type: 'Plugin Information',
			plugin_info: {
				name: 'Company Deadlines Plugin',
				description: [
					'Zuri.chat plugin',
					'Company Deadlines plugin for Zuri Chat that enables the users play set deadlines within the application',
				],
			},
			scaffold_structure: 'Monolith',
			team: 'HNG 8.0/Team Darwin',
			sidebar_url: 'https://reminders.zuri.chat/api/v1/sideBar',
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
	getSideBar: async (req, res, next) => {
		try {
			const { orgId, userId } = req.query
			const rooms = await db.getRooms()
			return true
		} catch (err) {
			return next(err)
		}
	},
}

export default sidebarController
