import { expect } from 'chai'
import makeDb from '../src/db/index'

describe('Db Function', () => {
	it('updates a document by id', async () => {
		const db = makeDb()
		const result = await db.update({})
		expect(result).to.be.equal(1)
	})
})
