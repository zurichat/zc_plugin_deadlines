/*
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021 
*/
import { expect } from 'chai'
import makeDb from '../src/db'

const db = makeDb()

describe('Delete document from db', () => {
	it('successfully delete one document', (done) => {
		const res = db.deleteOne('Reminders', 1)
		expect(res.satus).to.be.equal(200)
		done()
	})
})
