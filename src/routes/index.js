/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import reminderController from '@controllers/reminder.controller'
import {
	idParams,
	reminderSchema,
	searchSchema,
	updateSchema,
} from '@validations/reminder.validation'

const router = Router()

router.get('/ping', (req, res) =>
	res.json({ message: 'Hello! You have found the zc_plugin_reminder api' })
)

router
	.route('/reminders/:id')
	.get(reminderController.getById)
	.delete(reminderController.deleteReminder)
	.put(updateSchema, reminderController.updateById)
	// .put(idParams, updateSchema, reminderController.updateById)

// router.delete('/reminders/:id', idParams, reminderController.deleteReminder)
router
	.route('/reminders')
	.get(reminderController.getAll)
	.post(reminderSchema, reminderController.create)

router.get('/search', searchSchema, reminderController.searchReminder)

export default router
