/*
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021 
*/
import app from '@shared/http/server'
// eslint-disable-next-line import/no-unresolved
import request from 'supertest'
import makeDb from '../src/db/index'

const db = makeDb()
describe('Reminder controllers', () => {
	const collectionName = 'reminders'
	it('successfully create new reminder', () => {
		request(app)
			.post('/api/v1/reminders')
			.send({
				priority: 2,
				expiryDate: '01-01-2021',
				description: 'Obi is a boy',
				shouldRemind: true,
			})
			.expect(201)
	})

	it('successfully get all reminders', () => {
		request(app).get('/api/v1/reminders').expect(200)
	})
	it('successfully search for reminder', () => {
		// taskname, priority, expiryDate
		request(app)
			.get('/api/v1/search?title=online?creator=ms. dale Nienow?dueDate=2021-09-06T01:17:47.687Z')
			.expect(201)
	})

	it('reminder successfully deleted', async () => {
		// create Db
		const creatDoc = await db.create(collectionName, {
			priority: 2,
			plugin_id: 'zc_reminder',
			organization_id: 'darwin_organization',
			collection_name: collectionName,
		})

		request(app).delete(`/api/v1/reminders/${creatDoc.id}`).expect(201)
	})
})
