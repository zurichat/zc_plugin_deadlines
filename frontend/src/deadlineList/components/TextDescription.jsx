import React from 'react'

const TextDescription = ({ description }) => {
	const truncateString = (string, limit) => {
		if (string.length > limit && description) {
			return `${string.substring(0, limit)}...`
		} else {
			return string
		}
	}

	return (
		<>
			<div className="text-sm">
				{description && truncateString(description, 52)}
			</div>
		</>
	)
}

export default TextDescription
