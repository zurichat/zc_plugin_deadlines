/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import Mongoose from 'mongoose'
import env from '@config/environment'

let isConnected
let db
export default {
	async start() {
		if (isConnected) return db
		try {
			db = await Mongoose.connect(env.MONGODB.url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			isConnected = db.connections[0].readyState
			return db
		} catch (err) {
			console.log('MongoDB connection failed, retrying in 5 secs', err)
			setTimeout(this.start, 5000)
			return err
		}
	},
}
