/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import reminderController from '@controllers/reminder.controller'
import sidebarController from '@controllers/sidebar.controller'
import {
	idParams,
	reminderSchema,
	searchSchema,
	updateSchema,
	addRoomSchema,
} from '@validations/reminder.validation'

const router = Router()

router.get('/ping', (req, res) =>
	res.json({ message: 'Hello! You have found the zc_plugin_reminder api' })
)

// Swagger Documentation

/**
 * @swagger
 *  definitions:
 *   createReminder:
 *    type: object
 *    properties:
 *     assigneeID:
 *      type: string
 *      description: The ID of the assignee
 *      example: "6139364399bd9e223a37d92f"
 *     creatorID:
 *      type: string
 *      description: The ID of the creator
 *      example: "6139364399bd9e223a37d92f"
 *     title:
 *      type: string
 *      description: The title of the reminder
 *      example: "first reminder"
 *     description:
 *      type: string
 *      description: The description of the reminder
 *      example: "my first reminder to start work"
 *     startDate:
 *      type: string
 *      description: The starting date of the reminder
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the reminder
 *      example: "2021-09-23"
 *
 *   updateReminder:
 *    type: object
 *    properties:
 *     reminder_id:
 *      type: string
 *      description: The id of the reminder to be updated
 *      example: "6139b63159842c7444fb01f9"
 *     assigneeID:
 *      type: string
 *      description: The ID of the assignee
 *      example: "6139364399bd9e223a37d92f"
 *     creatorID:
 *      type: string
 *      description: The ID of the creator
 *      example: "6139364399bd9e223a37d92f"
 *     title:
 *      type: string
 *      description: The title of the reminder
 *      example: "first reminder"
 *     description:
 *      type: string
 *      description: The description of the reminder
 *      example: "my first reminder to start work"
 *     startDate:
 *      type: string
 *      description: The starting date of the reminder
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the reminder
 *      example: "2021-09-23"
 *
 *   search:
 *    type: object
 *    properties:
 *     title:
 *      type: string
 *      description: The title of the reminder
 *      example: "first reminder"
 *     priority:
 *      type: integer
 *      description: The priority of the reminder
 *      example: 2
 *     description:
 *      type: string
 *      description: The description of the reminder
 *      example: "my first reminder to start work"
 *     assigneeID:
 *      type: string
 *      description: The ID of the assignee
 *      example: "6139364399bd9e223a37d92f"
 *     creatorID:
 *      type: string
 *      description: The ID of the creator
 *      example: "6139364399bd9e223a37d92f"
 *     startDate:
 *      type: string
 *      description: The starting date of the reminder
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the reminder
 *      example: "2021-09-23"
 *
 *   createRoom:
 *    type: object
 *    properties:
 *     description:
 *      type: string
 *      description: The description of the reminder's room to be created
 *      example: "To remind you about important stuff yo!"
 *     orgId:
 *      type: string
 *      description: The ID of the organization
 *      example: "6139364399bd9e223a37d92f"
 *     userId:
 *      type: string
 *      description: The ID of the user
 *      example: "6139364399bd9e223a37d92f"
 *     title:
 *      type: string
 *      description: The title of the reminder's room
 *      example: "My first reminder's room"
 */

/**
 * @swagger
 * /api/v1/reminders/:id:
 *  get:
 *   summary: Get a reminder by ID
 *   description: returns the reminder data in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response of the reminder data fetched
 *    500:
 *      description: An error occurred
 */
router.get('/reminders/:id', reminderController.getById)

/**
 * @swagger
 * /api/v1/reminders/:id:
 *  delete:
 *   summary: Deletes a reminder by ID
 *   description: delete the reminder data in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful message of the reminder deleted successfully
 *    500:
 *      description: An error occurred
 */
router.delete('/reminders/:id', reminderController.deleteReminder)

/**
 * @swagger
 * /api/v1/reminders/:id:
 *  put:
 *   summary: Updates the reminder data
 *   description: Update the reminder data and returns the updated data of the reminder
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/updateReminder'
 *
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response and data updated
 *    404:
 *      description: Reminder with that ID not found
 */
router.put('/reminders/:id', updateSchema, reminderController.updateById)

// .put(idParams, updateSchema, reminderController.updateById)
// router.delete('/reminders/:id', idParams, reminderController.deleteReminder)

/**
 * @swagger
 * /api/v1/reminders:
 *  get:
 *   summary: Gets all reminders in the database
 *   description: returns all the reminder objects in the database
 *
 *   responses:
 *    200:
 *      description: A successful response and the reminders
 *    500:
 *      description: An error occurred
 */
router.get('/reminders', reminderController.getAll)

/**
 * @swagger
 * /api/v1/reminders:
 *  post:
 *   summary: Creates a new reminder
 *   description: Creates a new reminder and returns the newly created data of the reminder
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/createReminder'
 *
 *   responses:
 *    200:
 *      description: A successful response and data created
 *    500:
 *      description: An error occurred
 */
router.post('/reminders', reminderSchema, reminderController.create)

/**
 * @swagger
 * /api/v1/search:
 *  get:
 *   summary: Get reminder(s) using body parameter
 *   description: Get reminder(s) using texts gotten from {req.body} provided
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/search'
 *
 *   responses:
 *    200:
 *      description: A successful response and reminders fetched from the database
 *    500:
 *      description: An error occurred
 */
router.get('/search', searchSchema, reminderController.searchReminder)

/**
 * SIDEBAR AND ROOMS
 */

/**
 * @swagger
 * /api/v1/addRoom:
 *  post:
 *   summary: Creates a new room
 *   description: Creates a new reminder and returns the newly created data of the reminder
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/createRoom'
 *
 *   responses:
 *    200:
 *      description: A successful response and data of the room created
 *    500:
 *      description: An error occurred
 */
router.post('/addRoom', addRoomSchema, sidebarController.addToRoom)

/**
 * @swagger
 * /api/v1/removerRoom/?id:
 *  delete:
 *   summary: Deletes a reminder by ID
 *   description: delete the user with the ID from a room
 *   parameters:
 *    - in: query
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful message of "User deleted successfully" and the user info
 *    500:
 *      description: An error occurred
 */
router.delete('/removeRoom', sidebarController.deleteFromRoom)
export default router
