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

dotenv.config()
const build = path.resolve('frontend', 'build')
const publicPath = path.resolve('frontend', 'public')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(build))
app.use('/public', express.static(publicPath))
app.use('/api/v1', routes)

app.use((req, res, next) => {
	res.sendFile(path.join(build, 'index.html'))
})

app.use(errorHandler)

app.get('*', async (req, res) => {
	console.log('Here')
	res.redirect('/')
})

export default app
