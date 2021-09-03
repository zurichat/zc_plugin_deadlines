/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere 30th August 2021, ed_knowah 2nd Spetember 2021.
* */


import Response from '@utils/response.handler'

import { StatusCodes } from 'http-status-codes'

import { MESSAGE } from '@utils/constant'
import axios from 'axios'
import makeDb from '../db'

const { GET_ALL_REMINDERS } = MESSAGE

const { OK } = StatusCodes

const db = makeDb()

const reminderController = {
	// TODO: call Zuri core Db API
	create: async (req, res) => {
		return res.send('heelo')
	},

	findAll: async (req, res) => {
		// eslint-disable-next-line consistent-return
		try {
			const reminders = await db.getAllReminders()
			res.json({
				allReminders: reminders,
			})
		} catch (error) {
			console.log(error)
			res.json({
				status: 400,
				data: null,
				message: error.message,
			})
		}
	getAll: async (req, res) => {
		const data = await db.findAll('reminders')
		return Response.send(
			res,
			data.status,
			data.data,
			data.statusText,
			data.status === 200
		)
	},
}

export default reminderController
