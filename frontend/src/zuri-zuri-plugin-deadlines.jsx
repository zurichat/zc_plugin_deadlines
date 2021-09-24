import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import Base from './base'

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Base,
	errorBoundary() {
		return <div>Error in Deadlines. Check browser console for details.</div>
	},
})

export const { bootstrap, mount, unmount } = lifecycles
