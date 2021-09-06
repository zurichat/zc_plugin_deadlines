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
	const collectionName = 'deadlines'
	it('successfully create new deadline', () => {
		request(app)
			.post('/api/v1/deadlines')
			.send({
				teamsAssigned: '6131e01b1ad71bc9493e5be3',
				membersAssigned: [
					'6131e01b1ad71bc9493e5bdf',
					'6131e01b1ad71bc9493e5be3',
				],
				title: 'Designing Zuri Dashboard',
				description:
					'This task will be a sprint, we are to use the design to implement a responsive dashboard',
				startDates: '01-01-2021',
				dueDates: '02-02-2021',
			})
			.expect(201)
	})

	it('successfully get all deadlines', () => {
		request(app).get('/api/v1/deadlines').expect(200)
	})

	it('deadline successfully deleted', async () => {
		// create Db
		const creatDoc = await db.create(collectionName, {
			title: 'test title',
			plugin_id: 'zc_reminder',
			organization_id: 'darwin_organization',
			collection_name: collectionName,
		})

		request(app).delete(`/api/v1/deadlines/${creatDoc.id}`).expect(201)
	})
})
