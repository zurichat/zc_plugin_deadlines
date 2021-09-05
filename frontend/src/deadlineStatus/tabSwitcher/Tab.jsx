import React from 'react'

const Tab = ({ isSelected, children }) => {
	if (isSelected) {
		return (
			<div className="scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-green-350 mb-16 h-80 overflow-y-scroll">
				{children}
			</div>
		)
	}
	return null
}

export default Tab
