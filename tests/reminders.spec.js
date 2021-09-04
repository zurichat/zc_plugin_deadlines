/*
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021 
*/
import app from '@shared/http/server'
// eslint-disable-next-line import/no-unresolved
import request from 'supertest'

describe('GET /api/v1/reminders', () => {
	it('successfully get all reminders', (done) => {
		request(app).get('/api/v1/reminders').expect(200, done)
	})
})
