/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import express from 'express'
import dotenv from 'dotenv'
import routes from '@routes/index'
import path from 'path'
import { errorHandler } from '@shared/errors/ErrorClass'
import agenda from '../../agenda'

dotenv.config()
const build = path.resolve('frontend', 'build')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(build))
app.use('/api/v1', routes)

app.use((req, res, next) => {
	res.sendFile(path.join(build, 'index.html'))
})

app.use(errorHandler)

app.get('*', async (req, res) => {
	console.log('Here')
	res.redirect('/')
})
;(async () => {
	await agenda.start()
	await agenda
		.create('schedule reminders')
		.repeatEvery('60 seconds', 'schedule reminders')
		.save()
})()
export default app
