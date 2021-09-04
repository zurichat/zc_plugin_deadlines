import React from 'react'

const TextDescription = () => {
	return (
		<>
			<div>This task will be a sprint, we are to use the design</div>
		</>
	)
}
function truncateString(string, limit) {
	if (string.length > limit) {
		return string.substring(0, limit) + "..."
	} else {
		return string
	}
}
truncateString("This task will be a sprint, we are to use the design", 52)

export default TextDescription
