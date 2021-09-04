/*
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021 
*/
import app from '@shared/http/server'
// eslint-disable-next-line import/no-unresolved
import request from 'supertest'

describe('POST /api/v1/deadlines', () => {
	it('successfully get all deadlines', (done) => {
		request(app).post('/api/v1/deadlines').expect(201, done)
	})
})
