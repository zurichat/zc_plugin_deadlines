import React from 'react'

const Tab = ({ isSelected, children }) => {
	if (isSelected) {
		return <div className="overflow-y-scroll h-72">{children}</div>
	}
	return null
}

export default Tab
