/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import reminderController from '@controllers/reminder.controller'
import reminderValidation from '@validations/reminder.validation'

const router = Router()

router.get('/ping', (req, res) =>
	res.json({ message: 'Hello! You have found the zc_plugin_reminder api' })
)

router.route('/reminders/:id').delete(reminderController.deleteReminder)
router.post('/reminders', reminderValidation, reminderController.create)
router.route('/getReminders').get(reminderController.findAll)
router.get('/reminders', reminderController.getAll)
router.get('/upcoming', reminderController.getUpcomingReminders)

export default router
