/*
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021 
*/
import app from '@shared/http/server'
import { expect } from 'chai'
import { request } from 'supertest'

describe('DELETE /api/v1/reminders/id', () => {
	it('reminder successfully deleted', (done) => {
		request(app).delete('/api/v1/reminders/:id').expect(200, done)
	})
})
