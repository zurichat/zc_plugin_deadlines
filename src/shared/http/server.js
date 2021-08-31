/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import express from 'express'
import dotenv from 'dotenv'
import routes from '@routes'
import path from 'path'

dotenv.config()
const build = path.resolve('frontend', 'build')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(build))
app.use('/v1', routes)

app.use((req, res, next) => {
	res.sendFile(path.join(build, 'index.html'))
})

export default app
