/**
		Copyright 2021, Zuri plugin reminder.
		All rights reserved.
		Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import deadlineController from '@controllers/deadline.controller'
import sidebarController from '@controllers/plugin.controller'
import roomController from '@controllers/room.controller'
import * as deadlineValidation from '@validations/deadline.validation'
import * as roomValidation from '@validations/room.validation'

const router = Router()

router.get('/ping', (req, res) =>
	res.json({ message: 'Hello! You have found the zc_plugin_reminder api' })
)

router
	.route('/deadlines/:id')
	.get(deadlineController.getById)
	.delete(deadlineController.deleteById)
	.put(deadlineValidation.updateSchema, deadlineController.updateById)
// .put(idParams, updateSchema, reminderController.updateById)

// router.delete('/reminders/:id', idParams, reminderController.deleteReminder)
router
	.route('/deadlines')
	.get(deadlineController.getAll)
	.post(deadlineValidation.createSchema, deadlineController.create)

router.get(
	'/search',
	deadlineValidation.searchSchema,
	deadlineController.searchReminder
)

/**
 * SIDEBAR AND ROOMS
 */
router
	.route('/rooms/:id')
	.get(roomController.getById)
	.delete(roomController.deleteById)
	.put(roomValidation.updateSchema, roomController.updateById)

router
	.route('/rooms')
	.get(roomController.getAll)
	.post(roomValidation.createSchema, roomController.create)

router.get('/rooms/:id/add', roomController.addToRoom)
router.get('/rooms/:id/remove', roomController.deleteFromRoom)

export default router
