import React from 'react'

const Tab = ({ isSelected, children }) => {
	if (isSelected) {
		return <div>{children}</div>
	}
	return null
}

export default Tab
