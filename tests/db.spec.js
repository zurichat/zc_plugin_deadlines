import { expect } from 'chai'
import makeDb from '../src/db/index'

const db = makeDb()

describe('Db Function', () => {
	const collectionName = 'reminders'
	it('create new document', async () => {
		// create Db
		const creatDoc = await db.create(collectionName, {
			priority: 2,
			plugin_id: 'zc_reminder',
			organization_id: 'darwin_organization',
			collection_name: collectionName,
		})
		expect(creatDoc.plugin_id).to.be.equal('zc_reminder')
	})

	it('updates a document by id', async () => {
		const result = await db.update(
			collectionName,
			'6131e01b1ad71bc9493e5bdf',
			{}
		)
		expect(result).to.be.equal(true)
	})

	it('successfully delete one document', async () => {
		// create Db
		const creatDoc = await db.create(collectionName, {
			priority: 2,
			plugin_id: 'zc_reminder',
			organization_id: 'darwin_organization',
			collection_name: collectionName,
		})

		// console.log(creatDoc, 'doc')
		const res = await db.deleteOne(collectionName, creatDoc.id)
		expect(res.status).to.be.equal(201)
	})
})
