// eslint-disable-next-line import/no-unresolved
import faker from 'faker'

export default function makeFakeReminder(overrides) {
	const reminder = {
		priority: faker.datatype.number(5),
		expiryDate: faker.date.soon(),
		description: 'Upcoming reminder',
		recurring: faker.datatype.number(2),
	}
	return { ...reminder, ...overrides }
}
