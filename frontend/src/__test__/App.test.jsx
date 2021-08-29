import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

test('Basic render', () => {
	shallow(<App />)
})

test('Link render', () => {
	const wrapper = shallow(<App />)
	const link = <a href="https://zuri.chat">ZuriChat</a>

	expect(wrapper.contains(link)).toEqual(true)
})
