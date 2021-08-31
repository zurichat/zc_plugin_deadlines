import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

test('Basic render', () => {
	shallow(<App />)
})

test('Link render', () => {
	const wrapper = shallow(<App />)
	const linkText = 'Zuri Chat'

	expect(wrapper.contains(linkText)).toEqual(true)
})
