/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import env from '@config/environment/index'
import app from '@shared/http/server'
import connection from '@shared/connection'

const start = async () => {
	try {
		await connection.start()
		app.listen(env.PORT, () => console.log('Server is up and running'))
	} catch (error) {
		console.log('error', error)
		process.exit(0)
	}
}

start()
