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


// Swagger Documentation

/**
 * @swagger
 *  definitions:
 *   createDeadline:
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
 *      description: The title of the deadline
 *      example: "first deadline"
 *     description:
 *      type: string
 *      description: The description of the deadline
 *      example: "my first deadline to start work"
 *     startDate:
 *      type: string
 *      description: The starting date of the deadline
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the deadline
 *      example: "2021-09-23"
 *
 *   updateDeadline:
 *    type: object
 *    properties:
 *     reminder_id:
 *      type: string
 *      description: The id of the deadline to be updated
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
 *      description: The title of the deadline
 *      example: "first deadline"
 *     description:
 *      type: string
 *      description: The description of the deadline
 *      example: "my first deadline to start work"
 *     startDate:
 *      type: string
 *      description: The starting date of the deadline
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the deadline
 *      example: "2021-09-23"
 *
 *   search:
 *    type: object
 *    properties:
 *     title:
 *      type: string
 *      description: The title of the deadline
 *      example: "first deadline"
 *     priority:
 *      type: integer
 *      description: The priority of the deadline
 *      example: 2
 *     description:
 *      type: string
 *      description: The description of the deadline
 *      example: "my first deadline to start work"
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
 *      description: The starting date of the deadline
 *      example: "2021-09-10"
 *     dueDate:
 *      type: string
 *      description: The due date of the deadline
 *      example: "2021-09-23"
 *
 *   createRoom1:
 *    type: object
 *    properties:
 *     description:
 *      type: string
 *      description: The description of the deadline's room to be created
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
 *      description: The title of the deadline's room
 *      example: "My first deadline's room"
 * 
 *   createRoom:
 *    type: object
 *    properties:
 *     title:
 *      type: string
 *      description: The title of the room
 *      example: "My first room"
 *     description:
 *      type: string
 *      description: The description of the room
 *      example: "My first room to start chat"
 *     iconUrl:
 *      type: string
 *      description: The icon URL of the room's icon (logo)
 *      example: "https://zuri.chat/zurichatlogo.svg"
 *     members:
 *      type: array
 *      items:
 *       type: string
 *      description: Array of the members in the room
 *      example: ["6139fe2859842c7444fb0218", "6139fe2859842c7444fb0345"]
 *     ownerId:
 *      type: string
 *      description: The ID of the room's owner
 *      example: "6139fe2859842c7444fb0218"
 *     is_private:
 *      type: boolean
 *      description: The status of the room's privacy
 *      example: true
 *     is_archived:
 *      type: boolean
 *      description: This checks if the room is archived
 *      example: false
 * 
 *   updateRoom:
 *    type: object
 *    properties:
 *     title:
 *      type: string
 *      description: The title of the room
 *      example: "My first room"
 *     description:
 *      type: string
 *      description: The description of the room
 *      example: "My first room to start chat"
 *     iconUrl:
 *      type: string
 *      description: The icon URL of the room's icon (logo)
 *      example: "https://zuri.chat/zurichatlogo.svg"
 *     members:
 *      type: array
 *      items:
 *       type: string
 *      description: Array of the members in the room
 *      example: ["6139fe2859842c7444fb0218", "6139fe2859842c7444fb0345"]
 *     ownerId:
 *      type: string
 *      description: The ID of the room's owner
 *      example: "6139fe2859842c7444fb0218"
 *     is_private:
 *      type: boolean
 *      description: The status of the room's privacy
 *      example: true
 *     is_archived:
 *      type: boolean
 *      description: This checks if the room is archived
 *      example: false
 */

/**
 * @swagger
 * /api/v1/deadlines/:id:
 *  get:
 *   summary: Get a deadline by ID
 *   description: returns the deadline data with the ID in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response of the deadline data fetched
 *    500:
 *      description: An error occurred
 */
router.get('/deadlines/:id', deadlineController.getById)

/**
 * @swagger
 * /api/v1/deadlines/:id:
 *  delete:
 *   summary: Deletes a deadline by ID
 *   description: delete the deadline data in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful message of the deadline deleted successfully
 *    500:
 *      description: An error occurred
 */
router.delete('/deadlines/:id', deadlineController.deleteById)


/**
 * @swagger
 * /api/v1/deadlines/:id:
 *  put:
 *   summary: Updates the deadline data
 *   description: Update the deadline data and returns the updated data of the deadline
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/updateDeadline'
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
 *      description: Deadline with that ID not found
 */
router.put('/deadlines/:id', deadlineValidation.updateSchema, deadlineController.updateById)
// .put(idParams, updateSchema, reminderController.updateById)

// router.delete('/reminders/:id', idParams, reminderController.deleteReminder)

/**
 * @swagger
 * /api/v1/deadlines:
 *  get:
 *   summary: Gets all deadlines in the database
 *   description: returns all the deadlines object in the database
 *
 *   responses:
 *    200:
 *      description: A successful response and the deadlines
 *    500:
 *      description: An error occurred
 */
router.get('/deadlines', deadlineController.getAll)


/**
 * @swagger
 * /api/v1/deadlines:
 *  post:
 *   summary: Creates a new deadline
 *   description: Creates a new deadline and returns the newly created data of the deadline
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/createDeadline'
 *
 *   responses:
 *    200:
 *      description: A successful response and data created
 *    500:
 *      description: An error occurred
 */
router.post('/deadlines', deadlineValidation.createSchema, deadlineController.create)

/**
 * @swagger
 * /api/v1/search:
 *  get:
 *   summary: Get deadline(s) using body parameter
 *   description: Get deadline(s) using texts gotten from {req.body} provided
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/search'
 *
 *   responses:
 *    200:
 *      description: A successful response and deadlines fetched from the database
 *    500:
 *      description: An error occurred
 */
router.get(
	'/search',
	deadlineValidation.searchSchema,
	deadlineController.searchDeadline
)

/**
 * SIDEBAR AND ROOMS
 */

/**
 * @swagger
 * /api/v1/rooms/:id:
 *  get:
 *   summary: Get a room by ID
 *   description: returns the room data with the ID in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful response of the room data fetched
 *    500:
 *      description: An error occurred
 */
router.get('/rooms/:id', roomController.getById)

/**
 * @swagger
 * /api/v1/rooms/:id:
 *  delete:
 *   summary: Deletes a room by ID
 *   description: Deletes the room with the ID in the database
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *   responses:
 *    200:
 *      description: A successful message of the room deleted successfully
 *    500:
 *      description: An error occurred
 */
router.delete('/rooms/:id', roomController.deleteById)

/**
 * @swagger
 * /api/v1/rooms/:id:
 *  put:
 *   summary: Updates the room data
 *   description: Update the room data and returns the updated data of the room
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/definitions/updateRoom'
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
 *      description: Room with that ID not found
 *    500:
 *      description: An error occurred
 */
router.put('/rooms/:id', roomValidation.updateSchema, roomController.updateById)


/**
 * @swagger
 * /api/v1/rooms:
 *  get:
 *   summary: Gets all rooms in the database
 *   description: returns all the rooms object in the database
 *
 *   responses:
 *    200:
 *      description: A successful response and the rooms
 *    500:
 *      description: An error occurred
 */
router.get('/rooms', roomController.getAll)

/**
 * @swagger
 * /api/v1/rooms:
 *  post:
 *   summary: Creates a new room
 *   description: Creates a new room and returns the newly created data of the room
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
router.post('/rooms', roomValidation.createSchema, roomController.create)

/**
 * @swagger
 * /api/v1/rooms/:id/add?userId:
 *  delete:
 *   summary: Adds a user by UserID
 *   description: Adds the user with the ID to a room with the ID provided
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *    - in: query
 *      name: userId
 *      required: true
 * 
 *   responses:
 *    200:
 *      description: A successful message of "User, with id:${userId}, added successfully" and the user info
 *    404:
 *      description: Room with that ID not found
 *    500:
 *      description: An error occurred
 */
router.get('/rooms/:id/add', roomController.addToRoom)

/**
 * @swagger
 * /api/v1/rooms/:id/remove?userId:
 *  delete:
 *   summary: Removes a user by UserID
 *   description: Delete the user with the ID from a room
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *
 *    - in: query
 *      name: userId
 *      required: true
 * 
 *   responses:
 *    200:
 *      description: A successful message of "User, with id:${userId}, removed successfully" and the user info
 *    404:
 *      description: Room with that ID not found
 *    500:
 *      description: An error occurred
 */
router.get('/rooms/:id/remove', roomController.deleteFromRoom)

export default router
