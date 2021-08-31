/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import express from 'express'
import dotenv from 'dotenv'
import routes from '@routes'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/v1', routes)

export default app
